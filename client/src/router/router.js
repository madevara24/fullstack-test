import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/doctors',
            name: 'doctors',
            component: Doctors,
        },
    ]
})

export default router