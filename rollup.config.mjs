import path from 'node:path'
import { fileURLToPath } from 'node:url'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

// 获取当前文件的目录
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    }),
    // 解析模块路径
    resolve({
      preferBuiltins: true,
      extensions: ['.ts', '.js'],
    }),
    // 将 CommonJS 转换为 ES6 模块
    commonjs(),
    // 支持导入 JSON 文件
    json(),
    // babel
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-typescript', '@babel/preset-env'], // 处理 TypeScript 和 ES6+ 语法
      extensions: ['.ts'], // 支持的文件扩展名
    }),
  ],
}
