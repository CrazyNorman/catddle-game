import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'
import '@/plugins/style.js'

const app = createApp(App)

app.use(router).mount('#app')
