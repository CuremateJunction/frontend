// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'registration',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('@/views/Help.vue'),
      },
      {
        path: 'therapy/stress',
        name: 'Meditating Finn',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/meditation_finn.vue'),
      },
      {
        path: '/:notFound',
        name: 'NotFound',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/404_error.vue'),
      },
      {
        path: 'joinfinn',
        name: 'JoinFinn',
        component: () => import('@/views/JoinFinn.vue'),
      },
      {
        path: 'therapy-pain',
        name: 'TherapyPain',
        component: () => import('@/views/TherapyPain.vue'),
      },
      {
        path: 'figma',
        name: 'Figma',
        component: () => import('@/views/FigmaFrame.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
