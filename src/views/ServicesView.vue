<template>
  <main class="main">
    <!-- Pricing/Services Section -->
    <SectionTitle 
      title="Our Services"
      subtitle="Professional Electrolysis Solutions"
      id="services-title"
    />
    <section id="pricing" class="pricing section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6" v-for="service in servicesData.services" :key="service.name" data-aos="zoom-in" :data-aos-delay="service.delay">
            <div class="pricing-tem">
              <span v-if="service.featured" class="featured">Free</span>
              <h3 :style="{ color: service.color }">{{ service.name }}</h3>
              <div class="price">
                <template v-if="service.price !== 'Free'">
                  <sup>$</sup>{{ service.price }}
                </template>
                <template v-else>
                  {{ service.price }}
                </template>
              </div>
              <div class="fw-bold text-uppercase mt-2 mb-3" :style="{ color: service.color }">
                {{ service.period }}
              </div>
              <div class="icon">
                <i :class="'bi ' + service.icon" :style="{ color: service.color }"></i>
              </div>
              <ul>
                <li v-for="(feature, index) in service.features" 
                    :key="index"
                    :class="{ 'na': !feature.included }">
                  {{ feature.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import servicesData from '@/data/services.json'
import SectionTitle from '@/components/common/SectionTitle.vue'

export default {
  name: "ServicesView",
  components: {
    SectionTitle
  },
  setup() {
    return {
      servicesData
    }
  }
}
</script>