import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home.vue')
const car = () =>
    import ('../views/car/car.vue')
const categroy = () =>
    import ('../views/categroy/categroy.vue')
const my = () =>
    import ('../views/my/my.vue')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: home
    },
    {
        path: '/car',
        component: car
    },
    {
        path: '/categroy',
        component: categroy
    },
    {
        path: '/my',
        component: my
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router