import os from 'node:os'
import { _console, checkInit, createSymbolLink, readConfig, writeConfig } from '@/utils'
import inquirer from 'inquirer'

export async function useCommand(): Promise<void> {
  try {
    checkInit()

    const config = readConfig()
    const { jdks } = config
    const jdkList = Object.keys(jdks)

    if (jdkList.length === 0) {
      _console.warn('No JDK configurations found.')
      _console.info('Please run `jenv config` to add JDK configurations first.')
      return
    }

    const { version } = await prompt(jdkList)

    const jdkPath = jdks[version]
    const javaHomeLinkPath = createSymbolLink(jdkPath)

    // 4. 更新配置文件
    writeConfig({ ...config, current: version })

    _console.success(`✓ Successfully switched to JDK ${version}`)
    _console.info('\nTo use this JDK, add these lines to your profile:')

    platformTips(javaHomeLinkPath)
  }
  catch (error: any) {
    _console.error(`Failed to switch JDK: ${error.message}`)
  }
}

function prompt(jdkList: string[]): Promise<{ version: string }> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'version',
      message: 'Select JDK version:',
      choices: jdkList,
    },
  ])
}

function platformTips(javaHomeLinkPath: string): void {
  if (os.platform() === 'win32') {
    _console.info('Set environment variables:')
    _console.info(`JAVA_HOME=${javaHomeLinkPath}`)
    _console.info('Add %JAVA_HOME%\\bin to your PATH')
  }
  else {
    _console.info('Add to ~/.bashrc or ~/.zshrc:')
    _console.info(`export JAVA_HOME="${javaHomeLinkPath}"`)
    _console.info('export PATH="$JAVA_HOME/bin:$PATH"')
  }

  // 添加重启命令窗口的提示
  _console.info('\nNote: Please restart your terminal/command prompt to apply the changes.')
}
