import chalk from 'chalk'

chalk.level = 1

function warn(msg: string): void {
  console.log(chalk.yellow(msg))
}

function info(msg: string): void {
  console.log(chalk.gray(msg))
}

function error(msg: string): void {
  console.log(chalk.red(msg))
}

function success(msg: string): void {
  console.log(chalk.green(msg))
}

export const _console = {
  warn,
  info,
  error,
  success,
}
