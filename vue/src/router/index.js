import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '登陆',
        component: () => import ('../views/login.vue')
    },
    {
        path: '/dashboard',
        name: '主页',
        component: () =>import ('../views/layout.vue'),
        children:[
            {
                path:'',
                component:() => import('../Component/class/home.vue')
            },
            {
                path:'/order',
                name:'订单',
                component:() => import ('../Component/class/orderList.vue'),
                children:[
                    {
                        path:'orderInfo',
                        name:'订单列表',
                        component:() => import ('../Component/class/orderList.vue'),
                    }]
            }
        ]
    },
   
    
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router