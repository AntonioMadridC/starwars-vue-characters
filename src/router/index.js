import Vue from 'vue'
import VueRouter from 'vue-router'
/* import inicio from '@/views/InicioView.vue' */
/* import personajes from '@/views/PersonajesView.vue' */
import personaje from '@/views/PersonajeView.vue'
import contacto from  '@/views/ContactoView.vue'
import notfound from  '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */'../views/InicioView.vue')
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: () => import(/* webpackChunkName: "personajes" */'../views/PersonajesView.vue'),
    alias:['/people', '/characters']
  },
  {
    path: '/personajes/:id',
    component: personaje,
    props:true,
  },
  {
    path: '/contacto',
    component: contacto
  },
  {
    path: '*',
    component: notfound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
