import { createRouter, createWebHistory } from 'vue-router'

import HelloUser from '../views/HelloUser.vue'
import AutorizedPage from '../views/AutorizedPage.vue'
import ManePage from '../views/ManePage.vue'

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
  },
  {
    path: '/main-page',
    name: 'appMain',
    component: ManePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
