import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'
import '@/plugins/style.js'
import globalComponents from 'components/global/index.js'

const app = createApp(App)

app.use(router).use(globalComponents).mount('#app')
