import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const Index = () => import('@/views/index.vue')
const Login = () => import('@/views/login.vue')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                login: true,
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})

router.beforeEach((to, from, next) => {
    // store.dispatch('getToken')
    const isLogin = store.getters.isLogin
    if (to.meta.login && !isLogin) {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

export default router