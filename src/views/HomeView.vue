<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">{{ homeData.title }}</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {{ homeData.subtitle }}
            </p>
            <div class="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a v-for="button in homeData.buttons" 
                 :key="button.text"
                 :href="button.link" 
                 :class="button.icon === 'bi-arrow-right' ? 'btn-get-started' : 'btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0'">
                {{ button.text }} <i :class="'bi ' + button.icon + ' ms-2'"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img :src="homeData.image" class="img-fluid rounded animated" :alt="homeData.imageAlt">
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <HomeReviews />
  </main>
</template>

<script>
import homeData from '@/data/home.json'
import HomeReviews from '@/components/home/HomeReviews.vue'

export default {
  name: "HomeView",
  components: {
    HomeReviews
  },
  setup() {
    return {
      homeData
    }
  }
}
</script>