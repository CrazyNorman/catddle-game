import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import 'flex.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'

createApp(App).use(router).mount('#app')
