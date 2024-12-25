<template>
  <main class="main">
    <!-- Banner Section -->
    <HomeBanner />
    <!-- Reviews Section -->
    <HomeReviews />
  </main>
</template>

<script>
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeReviews from '@/components/home/HomeReviews.vue'

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    HomeReviews
  }
}
</script>