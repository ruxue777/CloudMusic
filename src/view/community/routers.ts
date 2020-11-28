import { RouteRecordRaw } from 'vue-router'

export const communityRouter: RouteRecordRaw[] = [
    {
        path: '/community',    
        name: 'Community',    
        component: import('./index.vue'),    
    }
]
