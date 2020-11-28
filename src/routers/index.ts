import { createRouter, createWebHashHistory} from 'vue-router';
import { myroute } from '../view/route'

export const router = createRouter({
    history: createWebHashHistory(),
    routes:[...myroute],
})
