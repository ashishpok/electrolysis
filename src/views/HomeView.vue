<template>
    <div v-if="homeData">
      <h1>{{ homeData.title }}</h1>
      <p>{{ homeData.subtitle }}</p>
      <img
        :src="homeData.bannerImage"
        alt="Electrolysis Hair Removal"
        class="banner-image"
      />
    </div>
  </template>
  
  <script>
  // Async requires a backend API or data has to be moved to public
  // Using Import the JSON data directly for now
  import homeDataJson from '@/data/home.json';

  export default {
    name: "HomeView",
    data() {
      return {
        homeData: homeDataJson,
      };
    } /*
    async created() {
      const response = await fetch("/data/home.json");
      this.homeData = await response.json();
    },*/
  };
  </script>
  