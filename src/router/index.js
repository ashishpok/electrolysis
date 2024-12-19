import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Location from '../views/LocationView.vue';
import Services from '../views/ServicesView.vue';
import Contact from '../views/ContactView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/location', component: Location },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
