import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routers'
import { remSize } from './util/rem'
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(router).use(remSize).use(Vant).mount('#app')


