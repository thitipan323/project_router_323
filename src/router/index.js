// router.js

import Home from '../components/Home.vue';
import OtherComponent from '../components/OtherComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/other',
    name: 'other',
    component: OtherComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;