import { createRouter, createWebHistory } from 'vue-router';

import Post from '../assets/components/Post';

const routes = [{ path: '/post/:id', component: Post }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
