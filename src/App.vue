<template>
  <div>
    <!-- Navbar component for global navigation -->
    <AppNavbar />
    
    <!-- Router View: This is where the routed pages will be injected -->
    <router-view />
  </div>

  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>
</template>

<script>
// Importing the Navbar component
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  }/*,
  mounted() {
    document.body.classList.add('starter-page-page');
  },
  beforeUnmount() {
    document.body.classList.remove('starter-page-page');
  }*/
};
</script>

<style>
/* You can add global styles here */

</style>
