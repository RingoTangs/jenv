import type { JenvConfig } from '@/types'
import fs from 'node:fs'
import { CONFIG_FILE_PATH } from '@/constants'

/**
 * 获取配置文件路径
 */
export function getConfigFilePath(): string {
  return CONFIG_FILE_PATH
}

/**
 * 配置文件是否存在
 */
export function existConfigFile(): boolean {
  const configPath = getConfigFilePath()
  return fs.existsSync(configPath)
}

/**
 * 读取配置文件
 */
export function readConfig(): JenvConfig {
  const configPath = getConfigFilePath()

  const content = fs.readFileSync(configPath, 'utf-8')
  return JSON.parse(content) as JenvConfig
}

/**
 * 写入配置文件
 */
export function writeConfig(config: JenvConfig): void {
  const configPath = getConfigFilePath()
  
  fs.writeFileSync(
    configPath,
    JSON.stringify(config, null, 2),
    'utf-8',
  )
}
