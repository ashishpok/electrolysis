<template>
    <div>
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
          <tr>
            <td>5 minutes</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>10 minutes</td>
            <td>$55</td>
          </tr>
          <tr>
            <td>15 minutes</td>
            <td>$90</td>
          </tr>
          <tr>
            <td>30 minutes</td>
            <td>$125</td>
          </tr>
          <tr>
            <td>45 minutes</td>
            <td>$150</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesView',
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f4f4f4;
  }
  </style>
  