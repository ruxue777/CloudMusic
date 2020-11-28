import { RouteRecordRaw } from 'vue-router'
import { findRouter } from './find/routers'
import { homeRouter } from './home/routers'

export const myroute: RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/find'
    },
    ...findRouter,
    ...homeRouter
]
