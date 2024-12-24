<template>
    <div v-if="aboutData">
      <h1>{{ aboutData.title }}</h1>
      <p>{{ aboutData.description }}</p>
    </div>
  </template>
  
  <script>  
  // Using Import the JSON data directly for now
  import aboutDataJson from '@/data/about.json';
  
  export default {
    name: "AboutView",
    data() {
      return {
        aboutData: aboutDataJson,
      };
    }
  };
  </script>