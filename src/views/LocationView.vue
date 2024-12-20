<template>
    <div v-if="locations">
      <h1>Our Locations</h1>
      <p>We are conveniently located in two cities to serve you better:</p>
      <ul>
        <li v-for="location in locations" :key="location.city">
          <strong>{{ location.city }}:</strong> {{ location.address }}
        </li>
      </ul>
      <p>Visit us for professional and permanent hair removal services!</p>
    </div>
  </template>
  
  <script>
  // Using Import the JSON data directly for now
  import locationDataJson from '@/data/locations.json';
  
  export default {
    name: "LocationView",
    data() {
      return {
        locations: locationDataJson,
      };
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  