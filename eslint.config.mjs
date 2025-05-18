import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    typescript: true,
    markdown: false,
    rules: {
      'no-console': ['error'],
      'unused-imports/no-unused-imports': ['error'],
      'antfu/top-level-function': ['off'],
      'style/brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    },
  },
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    rules: {
      'ts/explicit-function-return-type': ['warn'],
    },
  },
  {
    'files': ['src/utils/console.ts'],
    'no-console': ['off'],
  },
)
