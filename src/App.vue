<template>
  <div>
    <!-- Navbar component for global navigation -->
    <AppNavbar />
    
    <!-- Router View: This is where the routed pages will be injected -->
    <router-view />
  </div>
</template>

<script>
// Importing the Navbar component
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  mounted() {
    document.body.classList.add('starter-page-page');
  },
  beforeUnmount() {
    document.body.classList.remove('starter-page-page');
  }
};
</script>

<style>
/* You can add global styles here */

</style>
