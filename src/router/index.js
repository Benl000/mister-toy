import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../views/home.vue';
import about from '../views/about.vue';
import toyApp from '../views/toy-app.vue';
import toyDetails from '../views/toy-details.vue';
import toyEdit from '../views/toy-edit.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp
    },
    {
      path: '/toy/details',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/toy/edit',
      name: 'toy-edit',
      component: toyEdit
    },
    
  ]
});

export default router;