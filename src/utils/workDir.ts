import fs from 'node:fs'
import { WORK_DIR } from '@/constants'

export function getWorkDir(): string {
  return WORK_DIR
}

export function existWorkDir(): boolean {
  return fs.existsSync(WORK_DIR)
}

export function createWorkDir(): void {
  fs.mkdirSync(WORK_DIR, { recursive: true })
}
