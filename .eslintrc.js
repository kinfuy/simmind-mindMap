module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-void': 'error',
    "camelcase": "off",
    //"comma-dangle": ['off', "always-multiline"], // 添加结尾的逗号
    'no-param-reassign': ["error", { "props": false }], // 参数不可改变，属性可改变

    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/ban-types": 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }
    ], // 变量未使用
    '@typescript-eslint/no-non-null-assertion': 'off',
    "@typescript-eslint/no-var-requires": "off",
    "semi": ["error", "always"],
    "indent": ["error", 2, { "SwitchCase": 1, "flatTernaryExpressions": true }], // 使用两个空格，switch强制缩进default:0

    // vue
    "vue/html-indent": "off",
    'vue/html-self-closing': ['off'],
    'vue/no-v-html': "off",
    'vue/singleline-html-element-content-newline': 'off',
    'vue/custom-event-name-casing': 'error',
    'vue/no-deprecated-props-default-this': 'off',
    'vue/require-explicit-emits': 'off',
    "vue/max-attributes-per-line": [
      2,
      {
        "singleline": 4,
        "multiline": {
          "max": 1,
        }
      }
    ],
    "vue/max-len": ["error", {
      "code": 150,
      "template": 100,
      "tabWidth": 2,
      "comments": 150,
      "ignorePattern": "",
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreHTMLAttributeValues": true,
      "ignoreHTMLTextContents": true
    }],
  }
};