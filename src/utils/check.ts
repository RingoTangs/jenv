import { existConfigFile } from './configFile'
import { _console } from './console'
import { processExit } from './process'

export function checkInit(): void {
  if (!existConfigFile()) {
    _console.error('jenv is not initialized, please run `jenv init` to initialize')
    processExit()
  }
}
