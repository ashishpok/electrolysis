<template>
  <div id="app">
    <!-- Navbar component for global navigation -->
    <Navbar />
    
    <!-- Router View: This is where the routed pages will be injected -->
    <router-view />
  </div>
</template>

<script>
// Importing the Navbar component
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
/* You can add global styles here */
body {
  font-family: Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
