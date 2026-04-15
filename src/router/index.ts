import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FrontendLayout',
      component: () => import('../layouts/FrontendLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: 'volleyball',
          name: 'Volleyball',
          component: () => import('../views/Volleyball.vue'),
        },
        {
          path: 'engineer',
          name: 'Engineer',
          component: () => import('../views/Engineer.vue'),
        },
        {
          path: 'growth',
          name: 'Growth',
          component: () => import('../views/Growth.vue'),
        },
        {
          path: 'projects',
          name: 'Projects',
          component: () => import('../views/Projects.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: () => import('../layouts/AdminLayout.vue'),
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
        },
        {
          path: 'create-post',
          name: 'CreatePost',
          component: () => import('../views/CreatePost.vue'),
        },
      ],
    },
  ],
})

export default router
