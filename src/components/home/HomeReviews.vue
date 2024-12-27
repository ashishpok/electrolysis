<template>
    <SectionTitle 
      title="Testimonials"
      subtitle="What our clients say about us"
      id="testimonials-title"
    />
    
    <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
                <div class="swiper-wrapper">
                    <div v-for="review in reviews" :key="review.time" class="swiper-slide">
                        <div class="testimonial-item">
                            <div class="stars">
                                <i v-for="n in review.rating" :key="n" class="bi bi-star-fill"></i>
                            </div>
                            <p>{{ review.text }}</p>
                            <div class="profile mt-auto">
                                <img :src="review.profile_photo_url" class="testimonial-img" :alt="review.author_name">
                                <h3>{{ review.author_name }}</h3>
                                <h4>{{ review.time }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
             <!-- Add Review Link -->
             <div class="text-center mt-4">
                <a 
                    :href="`https://search.google.com/local/reviews?placeid=${googleConfig.PLACE_ID}`"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                    <span>View All Reviews</span>
                    <i class="bi bi-google ms-2"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import GooglePlacesService from '@/services/GooglePlacesService'
import googleConfig from '@/data/google-api.json'
import { Swiper } from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  name: 'HomeReviews',
  components: {
    SectionTitle
  },
  setup() {
    const reviews = ref([])
    
    onMounted(async () => {
      try {
        reviews.value = await GooglePlacesService.getBusinessReviews()
        
        new Swiper('.testimonials-slider', {
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
      } catch (error) {
        console.error('Error loading reviews:', error)
      }
    })

    return {
      reviews,
      googleConfig
    }
  }
}
</script> 