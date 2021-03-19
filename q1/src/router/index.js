import Vue from 'vue'
import VueRouter from 'vue-router'
import Basic from '../components/Basic.vue'
import Personal from '../components/Personal.vue'
import Prefs from '../components/Prefs.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        alias: '/basic',
        name: 'Basic',
        component: Basic
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
    },
    {
        path: '/prefs',
        name: 'Prefs',
        component: Prefs
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router