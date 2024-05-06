import {createRouter, createWebHistory} from "vue-router";

import HelloUser from "../views/HelloUser.vue";

const routes = [
    {
        path: '/',
        name: 'Hellousers',
        component: HelloUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
