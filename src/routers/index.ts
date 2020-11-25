import { createRouter, createWebHashHistory} from 'vue-router';
import { myrouter } from '../view/router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes:[...myrouter],
})
