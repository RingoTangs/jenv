import fs from 'node:fs'
import os from 'node:os'
import { JAVA_HOME_LINK_PATH } from '@/constants'
import { createWorkDir, existWorkDir } from './workDir'

export function createSymbolLink(jdkPath: string): string {
  // 1. 确保 JDK 路径存在
  if (!fs.existsSync(jdkPath)) {
    throw new Error(`JDK path does not exist: ${jdkPath}`)
  }

  // 2. 确保 .jenv 目录存在
  if (!existWorkDir()) {
    createWorkDir()
  }

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

export function removeSymbolLink(): void {
  if (fs.existsSync(JAVA_HOME_LINK_PATH)) {
    if (os.platform() === 'win32') {
      // Windows 上先检查是否是 junction
      const stats = fs.lstatSync(JAVA_HOME_LINK_PATH)
      if (stats.isSymbolicLink() || stats.isDirectory()) {
        fs.rmSync(JAVA_HOME_LINK_PATH, { recursive: true })
      }
    }
    else {
      fs.unlinkSync(JAVA_HOME_LINK_PATH)
    }
  }
}
