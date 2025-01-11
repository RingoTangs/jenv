import { _console, checkInit, processExit, readConfig, removeSymbolLink, writeConfig } from '@/utils'
import inquirer from 'inquirer'

enum ConfigAction {
  ADD = 'add',
  REMOVE = 'remove',
  LIST = 'list',
  EXIT = 'exit',
}

export async function configCommand(): Promise<void> {
  try {
    // 检查是否初始化
    checkInit()

    // 首先选择操作类型
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
          { name: 'Add new JDK', value: ConfigAction.ADD },
          { name: 'Remove JDK', value: ConfigAction.REMOVE },
          { name: 'List config', value: ConfigAction.LIST },
          { name: 'Exit', value: ConfigAction.EXIT },
        ],
      },
    ])

    switch (action) {
      case ConfigAction.ADD:
        await addJDK()
        break
      case ConfigAction.REMOVE:
        await removeJDK()
        break
      case ConfigAction.LIST:
        listJDKs()
        break
      case ConfigAction.EXIT:
        processExit()
        break
    }
  }
  catch (error: any) {
    _console.error(`Configuration failed: ${error.message}`)
    processExit()
  }
}

/**
 * 添加新的 JDK 配置
 */
async function addJDK(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: 'Enter JDK version name (e.g. jdk11):',
      validate: (input: string) => {
        if (!input.trim())
          return 'Version name cannot be empty'
        return true
      },
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter JDK installation path:',
      validate: (input: string) => {
        if (!input.trim())
          return 'Path cannot be empty'
        return true
      },
    },
  ])

  const config = readConfig()
  config.jdks[answers.version] = answers.path
  writeConfig(config)

  _console.success(`✓ Successfully added JDK ${answers.version}`)
  _console.info(`Path: ${answers.path}`)
}

/**
 * 删除 JDK 配置
 */
async function removeJDK(): Promise<void> {
  const config = readConfig()
  const jdkList = Object.keys(config.jdks)

  if (jdkList.length === 0) {
    _console.warn('No JDK configurations found.')
    return
  }

  const { version } = await inquirer.prompt([
    {
      type: 'list',
      name: 'version',
      message: 'Select JDK to remove:',
      choices: jdkList,
    },
  ])

  // 如果删除的是当前使用的版本，需要清空 current
  if (version === config.current) {
    config.current = ''
    removeSymbolLink()
  }

  delete config.jdks[version]
  writeConfig(config)

  _console.success(`✓ Successfully removed JDK ${version}`)
}

/**
 * 列出所有 JDK 配置
 */
function listJDKs(): void {
  const config = readConfig()
  _console.info(JSON.stringify(config, null, 2))
}
