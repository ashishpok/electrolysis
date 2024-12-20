<template>
    <div v-if="contactData">
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to schedule an appointment, please reach out:</p>
      <ul>
        <li><strong>Email:</strong> {{ contactData.email }}</li>
        <li><strong>Phone:</strong> {{ contactData.phone }}</li>
      </ul>
    </div>
  </template>
  
  <script>  
  // Using Import the JSON data directly for now
  import contactDataJson from '@/data/contact.json';
  
  export default {
    name: "ContactView",
    data() {
      return {
        contactData: contactDataJson,
      };
    }
  };
  </script>