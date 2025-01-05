import type { JenvConfig } from '@/types'
import { _console, createWorkDir, existConfigFile, existWorkDir, getConfigFilePath, writeConfig } from '@/utils'

export function initCommand(): void {
  const configPath = getConfigFilePath()

  // 检查配置文件是否已存在
  if (existConfigFile()) {
    _console.success('✓ jenv is already initialized！')
    return
  }

  try {
    // 创建 jenv 工作目录
    if (!existWorkDir()) {
      createWorkDir()
    }

    // 创建默认配置
    const defaultConfig: JenvConfig = {
      jdks: {},
      current: '',
    }

    // 写入配置文件
    writeConfig(defaultConfig)

    _console.success('✓ Successfully initialized jenv')
    _console.info(`Configuration file created at: ${configPath}`)
    _console.info('\nNext steps:')
    _console.info('1. Run `jenv config` to add JDK configurations')
    _console.info('2. Run `jenv use <version>` to switch JDK version')
  }
  catch (e: any) {
    _console.error(`jenv init failed: ${e.message}`)
  }
}
