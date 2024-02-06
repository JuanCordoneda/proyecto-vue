import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/detalles/:id',
    name: 'student-details',
    component: () => import('./components/StudentDetails.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
