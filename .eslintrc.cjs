module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 必须放在最后面
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // 解决无法解析.vue
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': [
      // 忽略文件命名index要求大写
      'error',
      {
        ignores: ['index']
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off' // 关闭any类型警告
  }
};
