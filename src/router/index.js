import Vue from 'vue';
import VueRouter from 'vue-router';
import Jobs from '../pages/Jobs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Jobs',
    component: Jobs
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
