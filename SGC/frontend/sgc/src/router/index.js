// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatosList from '../views/ContatosList.vue'
import ContatoForm from '../views/ContatoForm.vue'
import ContatoSearch from '../views/ContatoSearch.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/contatos', name: 'contatos', component: ContatosList },
  { path: '/contatos/novo', name: 'contato-novo', component: ContatoForm },
  { path: '/contatos/editar/:id', name: 'contato-editar', component: ContatoForm, props: true },
  { path: '/contatos/pesquisar', name: 'contato-pesquisar', component: ContatoSearch }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
