import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import 'flex.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import installGlobalComp from './components'

const app = createApp(App)
installGlobalComp(app)
app.use(router).mount('#app')
