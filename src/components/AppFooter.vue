<template>
    <footer id="footer" class="footer">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-6 footer-about">
            <a href="/" class="d-flex align-items-center">
              <span class="sitename">Electrolysis Associates</span>
            </a>
            <div class="footer-contact pt-3">
              <p><strong>{{ locations.locations[0].address.building }}</strong></p>
              <p>{{ locations.locations[0].address.street }}, {{ locations.locations[0].address.suite }}</p>
              <p>{{ locations.locations[0].address.city }}, {{ locations.locations[0].address.state }} {{ locations.locations[0].address.zipCode }}</p>
              <p class="mt-3"><strong>Phone:</strong> <span>{{ locations.locations[0].contact.phone }}</span></p>
              <p><strong>Email:</strong> <span>{{ locations.locations[0].contact.email }}</span></p>
            </div>
          </div>
  
          <div class="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li v-for="link in extLinks.useful" :key="link.text">
                <i class="bi bi-chevron-right"></i>
                <a :href="link.url">{{ link.text }}</a>
              </li>
            </ul>
          </div>
  
          <div class="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>{{ socialData.text }}</p>
            <div class="social-links d-flex">
              <a v-for="social in socialData.links" 
                 :key="social.platform" 
                 :href="social.url" 
                 :title="social.platform">
                <i :class="'bi bi-' + social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">Electrolysis Associates</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  </template>
  
  <script>
  import locationsData from '@/data/locations.json'
  import extLinksData from '@/data/ext-links.json'
  import socialData from '@/data/social-links.json'
  
  export default {
    name: 'AppFooter',
    setup() {
      return {
        locations: locationsData,
        extLinks: extLinksData,
        socialData
      }
    }
  }
  </script> 