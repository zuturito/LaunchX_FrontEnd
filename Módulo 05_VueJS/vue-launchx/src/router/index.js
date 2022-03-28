import { createRouter , createWebHashHistory } from 'vue-router'
import BienvenidaPagina from '../views/BienvenidaPagina.vue'
import MisPedidos from '../views/MisPedidos.vue'
import PasteleroPage from '../views/PasteleroPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BienvenidaPagina
  },
  {
    path: '/pasteles',
    name: 'pasteles',
    component: () => import('../views/PastelesCatalogo.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: MisPedidos
  },
  {
    path: '/admin',
    name: 'admin',
    component: PasteleroPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
