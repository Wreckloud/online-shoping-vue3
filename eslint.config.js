import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  // 指定需要 lint 的文件类型
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  // 跳过构建产物等不需要检查的文件
  globalIgnores(['**/dist/**', '**/coverage/**']),

  // 启用浏览器全局变量（如 window、document）
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  // 启用官方 JS 推荐规则
  js.configs.recommended,
  // 启用 Vue 的基本检查规则
  ...pluginVue.configs['flat/essential'],
  // 跳过 Vue 配置中自带的 Prettier 格式化
  skipFormatting,

  // 额外插件与规则配置
  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      // 把 prettier 的格式问题当作 error 报出，确保保存时会自动修复
      'prettier/prettier': 'error',

      // 允许 index.vue 这种单词组件名
      'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],

      // 允许 setup 中直接解构 props，个人习惯问题
      'vue/no-setup-props-destructure': ['off'],

      // 禁止使用未声明变量
      'no-undef': 'error'
    }
  }
])
