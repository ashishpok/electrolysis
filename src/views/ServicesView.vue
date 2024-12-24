<template>
    <div v-if="services">
      <h1>Our Services</h1>
      <p>We offer the following time-based electrolysis hair removal services:</p>
      <table>
        <thead>
          <tr>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.duration">
            <td>{{ service.duration }}</td>
            <td>{{ service.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  // Using Import the JSON data directly for now
  import servicesDataJson from '@/data/services.json';
  
  export default {
    name: "ServicesView",
    data() {
      return {
        services: servicesDataJson,
      };
    }
  };
  </script>