import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: true,
  markdown: false,
  rules: {
    'no-console': ['off'],
    'unused-imports/no-unused-imports': ['error'],
  },
})
