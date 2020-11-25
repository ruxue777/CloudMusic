import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routers'
import { remSize } from './util/rem'

createApp(App).use(router).use(remSize).mount('#app')


