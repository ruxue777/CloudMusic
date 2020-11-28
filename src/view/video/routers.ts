import { RouteRecordRaw } from 'vue-router'

export const videoRouter: RouteRecordRaw[] = [
    {
        path: '/video',    
        name: 'Video',    
        component: import('./index.vue'),    
    }
]
