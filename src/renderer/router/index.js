import {createRouter, createWebHistory} from "vue-router";

import HelloUser from "../views/HelloUser.vue";
import AutorizedPage from "../views/AutorizedPage.vue";

const routes = [
    {
        path: '/',
        name: 'Hellousers',
        component: HelloUser
    },
    {
        path: '/authorized',
        name: 'autho',
        component: AutorizedPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
