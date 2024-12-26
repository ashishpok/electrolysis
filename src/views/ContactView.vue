<template>
  <main class="main">
    <SectionTitle 
      title="Contact Us"
      subtitle="Get in touch with us"
      id="contact-title"
    />
    <section id="contact" class="contact section">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <form @submit.prevent="handleSubmit" class="php-email-form needs-validation" novalidate>
              <div class="row gy-4">
                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                </div>

                <div class="col-md-6">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                  <div class="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div class="col-md-12">
                  <select class="form-select" name="subject" required>
                    <option value="" disabled selected>Select a Subject</option>
                    <option value="appointment">Schedule an Appointment</option>
                    <option value="services">Questions about Services</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="preparation">Pre/Post Treatment Care</option>
                    <option value="location">Location & Directions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SectionTitle from '@/components/common/SectionTitle.vue'

export default {
  name: 'ContactView',
  components: {
    SectionTitle
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit(event) {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }
  }
}
</script>