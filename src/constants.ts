import os from 'node:os'
import path from 'node:path'

/**
 * jenv 工作目录
 */
export const WORK_DIR = path.join(os.homedir(), '.jenv')

/**
 * jdk 符号链接路径
 */
export const JAVA_HOME_LINK_PATH = path.join(WORK_DIR, 'jdk')

/**
 * jenv 配置文件路径
 */
export const CONFIG_FILE_PATH = path.join(WORK_DIR, '.jenvrc')
