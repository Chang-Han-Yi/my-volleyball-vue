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
          meta: { title: '首頁' },
        },
        {
          path: 'volleyball',
          name: 'Volleyball',
          component: () => import('../views/Volleyball.vue'),
          meta: { title: '排球專區' },
        },
        {
          path: 'volleyball/:slug',
          name: 'VolleyballArticle',
          component: () => import('../views/VolleyballArticle.vue'),
          meta: { title: '賽事文章' },
        },
        {
          path: 'engineer',
          name: 'Engineer',
          component: () => import('../views/Engineer.vue'),
          meta: { title: '工程師專區' },
        },
        {
          path: 'growth',
          name: 'Growth',
          component: () => import('../views/Growth.vue'),
          meta: { title: '成長專區' },
        },
        {
          path: 'projects',
          name: 'Projects',
          component: () => import('../views/Projects.vue'),
          meta: { title: '作品專區' },
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue'),
          meta: { title: '聯絡我們' },
        },
      ],
    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: () => import('../layouts/AdminLayout.vue'),
      redirect: '/admin/dashboard',
      meta: { title: '管理後台' },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
          meta: { title: '文章管理' },
        },
        {
          path: 'create-post',
          name: 'CreatePost',
          component: () => import('../views/CreatePost.vue'),
          meta: { title: '新增文章' },
        },
        {
          path: 'edit-post/:id',
          name: 'EditPost',
          component: () => import('../views/EditPost.vue'),
          meta: { title: '編輯文章' },
        },
      ],
    },
  ],
})

export default router
