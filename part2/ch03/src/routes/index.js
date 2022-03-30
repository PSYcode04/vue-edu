import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/login', component: LoginPage },
  {
    path: '/profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

const router = new VueRouter({
  routes
});

export default router;
