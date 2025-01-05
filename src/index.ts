#!/usr/bin/env node

import process from 'node:process'
import { configCommand, initCommand, lsCommand } from '@/commands'
import { Command } from 'commander'
import pkg from '../package.json'
import { useCommand } from './commands/use'

const program = new Command()

program
  .name('jenv')
  .description(pkg.description)
  .version(pkg.version)

program
  .command('init') // 定义命令和参数
  .description('Init jenv config') // 命令描述
  .action(initCommand)

program
  .command('config')
  .description('Configure jenv')
  .action(configCommand)

program
  .command('ls')
  .description('List jdks')
  .action(lsCommand)

program
  .command('use')
  .description('Use jdk')
  .action(useCommand)

program.parse(process.argv)
