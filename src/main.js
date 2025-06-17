// 引入默认样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 自定义指令
app.directive('lazyLoad', {
  mounted(el, binding) {
    // 使用 vueUse 的 useIntersectionObserver 检测元素是否位于视窗'
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value
        return
      }
    })
  }
})
