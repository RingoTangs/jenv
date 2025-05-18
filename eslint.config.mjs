import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: true,
  markdown: false,
  rules: {
    'no-console': ['off'],
    'unused-imports/no-unused-imports': ['error'],
    'antfu/top-level-function': ['off'],
    'ts/explicit-function-return-type': ['warn'],
  },
})
