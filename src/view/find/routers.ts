import { RouteRecordRaw } from 'vue-router'

export const findRouter: RouteRecordRaw[] = [
    {
        path: '/find',    
        name: 'Find',    
        component: import('./index.vue'),    
    }
]
