// 引入默认样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyLoadPlug } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用自定义指令
app.use(lazyLoadPlug)

app.mount('#app')
