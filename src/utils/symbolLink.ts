import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { JAVA_HOME_LINK_PATH } from '@/constants'
import { _console } from './console'

export function createSymbolLink(jdkPath: string): string {
  try {
    // 1. 确保 JDK 路径存在
    if (!fs.existsSync(jdkPath)) {
      throw new Error(`JDK path does not exist: ${jdkPath}`)
    }

    // 2. 确保 .jenv 目录存在
    const jenvDir = path.dirname(JAVA_HOME_LINK_PATH)
    if (!fs.existsSync(jenvDir))
      fs.mkdirSync(jenvDir, { recursive: true })

    // 3. 删除已存在的符号链接
    removeSymbolLink()

    // 4. 创建新的符号链接
    if (os.platform() === 'win32') {
      // Windows 需要使用 junction 类型的符号链接
      fs.symlinkSync(jdkPath, JAVA_HOME_LINK_PATH, 'junction')
    }
    else {
      // Unix 系统使用普通符号链接
      fs.symlinkSync(jdkPath, JAVA_HOME_LINK_PATH)
    }

    return JAVA_HOME_LINK_PATH
  }
  catch (error: any) {
    if (error.code === 'EPERM') {
      // Windows 上需要管理员权限
      _console.error('Failed to create symlink: Permission denied')
      _console.info('\nOn Windows, you need to:')
      _console.info('1. Run as Administrator, or')
      _console.info('2. Enable Developer Mode in Windows Settings')
      throw new Error('Permission denied - Run as Administrator or enable Developer Mode')
    }
    throw error
  }
}

export function removeSymbolLink(): void {
  try {
    if (fs.existsSync(JAVA_HOME_LINK_PATH)) {
      if (os.platform() === 'win32') {
        // Windows 上先检查是否是 junction
        const stats = fs.lstatSync(JAVA_HOME_LINK_PATH)
        if (stats.isSymbolicLink() || stats.isDirectory())
          fs.rmSync(JAVA_HOME_LINK_PATH, { force: true })
      }
      else {
        fs.unlinkSync(JAVA_HOME_LINK_PATH)
      }
    }
  }
  catch (error: any) {
    if (error.code === 'EPERM') {
      _console.error('Failed to remove existing symlink: Permission denied')
      throw new Error('Permission denied - Run as Administrator')
    }
    throw error
  }
}
