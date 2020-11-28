import { RouteRecordRaw } from 'vue-router'
import { findRouter } from './find/routers'
import { homeRouter } from './home/routers'
import { videoRouter } from './video/routers'
import { communityRouter } from './community/routers'

export const myroute: RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/find'
    },
    ...findRouter,
    ...homeRouter,
    ...videoRouter,
    ...communityRouter
]
