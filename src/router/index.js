import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/orders',
        name: 'orders',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;