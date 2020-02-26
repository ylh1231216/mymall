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
const detail = () =>
    import ('../views/detail/detail.vue')

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
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


// router.beforeEach((to, from, next) => {
//     console.log('到：')
//     console.log(to)
//     console.log('来自：')
//     console.log(from)
//     next()
// })
export default router