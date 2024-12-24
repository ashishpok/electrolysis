import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Locations from '../views/LocationsView.vue';
import Services from '../views/ServicesView.vue';
import Contact from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Electrolysis Associates'
    }
  },
  { path: '/about', component: About },
  { path: '/locations', component: Locations },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update document title when route changes
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Electrolysis Associates'
  next()
})

export default router;
