import { RouteRecordRaw } from 'vue-router'

export const homeRouter: RouteRecordRaw[] = [
    {
        path: '/home',    
        name: 'Home',    
        component: import('./index.vue'),    
    }
]
