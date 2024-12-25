<template>
  <section id="testimonials" class="testimonials">
    <div class="container" data-aos="fade-up">
      <header class="section-header">
        <h2>Reviews</h2>
        <p>What our clients say about us</p>
      </header>

      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper-wrapper">
          <div v-for="review in reviews" 
               :key="review.time" 
               class="swiper-slide">
            <div class="testimonial-item">
              <div class="stars">
                <i v-for="n in review.rating" 
                   :key="n" 
                   class="bi bi-star-fill"></i>
              </div>
              <p>{{ review.text }}</p>
              <div class="profile mt-auto">
                <img :src="review.profile_photo_url" 
                     class="testimonial-img" 
                     :alt="review.author_name">
                <h3>{{ review.author_name }}</h3>
                <h4>{{ review.time }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import GooglePlacesService from '@/services/GooglePlacesService'
import { Swiper } from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  name: 'HomeReviews',
  setup() {
    const reviews = ref([])
    
    onMounted(async () => {
      // Fetch reviews
      reviews.value = await GooglePlacesService.getBusinessReviews()
      
      // Initialize Swiper with modules
      const swiper = new Swiper('.testimonials-slider', {
        modules: [Pagination, Autoplay],
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 }
        }
      })
    })

    return {
      reviews
    }
  }
}
</script> 