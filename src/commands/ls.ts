import { _console, checkInit, readConfig } from '@/utils'

export function lsCommand(): void {
  try {
    checkInit()

    const config = readConfig()

    const { jdks, current } = config

    Object.keys(jdks).forEach((jdk) => {
      if (jdk === current)
        _console.success(`* ${jdk}`)
      else
        _console.info(`  ${jdk}`)
    })
  }
  catch (e: any) {
    _console.error(`jenv ls failed: ${e.message}`)
  }
}
