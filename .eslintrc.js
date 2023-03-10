module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 'off', //
    'react/prop-types': 0, // 防止在react组件定义中缺少props验证
    'require-jsdoc': 'off' // 取消注视规范
  }
}
