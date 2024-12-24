import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Services from '../views/ServicesView.vue';
import Locations from '../views/LocationsView.vue';
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
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Electrolysis Associates - About'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Electrolysis Associates - Services'
    }
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    meta: {
      title: 'Electrolysis Associates - Locations'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Electrolysis Associates - Contact'
    }
  }
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
