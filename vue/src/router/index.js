import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () => {
            import ('../views/login.vue')
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/layout.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router