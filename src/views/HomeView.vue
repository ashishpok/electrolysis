<template>
  <main class="main">
    <SeoManager 
      :title="seoData.title"
      :description="seoData.description"
      :keywords="seoData.keywords"
      :og="seoData.og"
      :twitter="seoData.twitter"
    />
    <!-- Banner Section -->
    <HomeBanner />
    <!-- Reviews Section -->
    <HomeReviews />
  </main>
</template>

<script>
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeReviews from '@/components/home/HomeReviews.vue'
import SeoManager from '@/components/common/SeoManager.vue'
import homeData from '@/data/home.json'

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    HomeReviews,
    SeoManager
  },
  data() {
    return {
      seoData: homeData.seo
    }
  }
}
</script>