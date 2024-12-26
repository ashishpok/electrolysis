<template>
  <main class="main">
    <SectionTitle 
      title="Our Locations"
      subtitle="Visit us at our convenient locations"
      id="locations-title"
    />
    <section id="locations" class="about section"> <!-- TODO: change to locations but about is needed for formating -->
      <div class="container" data-aos="fade-up">
        <div class="row gx-0">
          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>{{ location.name }} Location</h3>
              <h2>{{ location.address.building }}</h2>
              <p>
                {{ location.address.street }}{{ location.address.suite ? ', ' + location.address.suite : '' }}<br>
                {{ location.address.city }}, {{ location.address.state }} {{ location.address.zipCode }}<br><br>
                <strong>Phone:</strong> {{ location.contact.phone }}<br>
                <strong>Email:</strong> {{ location.contact.email }}
              </p>
              <div class="text-center text-lg-start">
                <a :href="location.mapUrl" 
                   target="_blank" 
                   class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Get Directions</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <iframe
              :src="location.embedUrl"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import locationsData from '@/data/locations.json'
import SectionTitle from '@/components/common/SectionTitle.vue'

export default {
  name: 'LocationsView',
  components: {
    SectionTitle
  },
  setup() {
    return {
      //only one location for now
      location: locationsData.locations[0]
    }
  }
}
</script>

<style scoped>
iframe {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 5px;
}
</style>