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
              <form @submit.prevent="handleSubmit" class="php-email-form" novalidate>
                <div class="row g-3">
                  <!-- Name -->
                  <div class="col-md-6">
                    <input 
                      type="text" 
                      name="name" 
                      class="form-control" 
                      placeholder="Your Name *" 
                      required
                    >
                    <div class="invalid-feedback">
                      Please provide your name.
                    </div>
                  </div>
  
                  <!-- Email -->
                  <div class="col-md-6">
                    <input 
                      type="email" 
                      class="form-control" 
                      name="email" 
                      placeholder="Your Email *" 
                      required
                    >
                    <div class="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>
  
                  <!-- Phone -->
                  <div class="col-md-6">
                    <input 
                      type="tel" 
                      class="form-control" 
                      name="phone" 
                      placeholder="US Phone Number (Optional)"
                      @input="handlePhoneInput"
                      maxlength="14"
                    >
                    <div class="invalid-feedback">
                      Please enter a valid US phone number.
                    </div>
                  </div>
  
                  <!-- Subject -->
                  <div class="col-md-6">
                    <select 
                      class="form-select" 
                      name="subject" 
                      required
                    >
                      <option value="">Select a Reason *</option>
                      <option value="Appointment">Schedule an Appointment</option>
                      <option value="Services">Questions about Services</option>
                      <option value="Pricing">Pricing Information</option>
                      <option value="Preparation">Pre/Post Treatment Care</option>
                      <option value="Location">Location & Directions</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a reason for contact.
                    </div>
                  </div>
  
                  <!-- Message -->
                  <div class="col-12">
                    <textarea 
                      class="form-control" 
                      name="message" 
                      rows="6" 
                      placeholder="Message" 
                      required
                    ></textarea>
                    <div class="invalid-feedback">
                      Please provide your message.
                    </div>
                  </div>
  
                  <div class="col-12 text-center">
                    <div class="loading" :style="{ display: loading ? 'block' : 'none', background: 'transparent' }">Sending...</div>
                    <div class="error-message" :style="{ display: error ? 'block' : 'none' }">{{ error }}</div>
                    <div class="sent-message" :style="{ display: success ? 'block' : 'none' }">
                      Your message has been sent. Thank you!
                    </div>
  
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
        </div>
      </section><!-- End Contact Section -->
    </main>
  </template>
  
  <script>
  import SectionTitle from '@/components/common/SectionTitle.vue'
  import EmailService from '@/services/EmailService'
  
  export default {
    name: 'ContactView',
    components: {
      SectionTitle
    },
    data() {
      return {
        loading: false,
        error: null,
        success: false
      }
    },
    methods: {
      formatPhoneNumber(event) {
        let input = event.target;
        let value = input.value.replace(/\D/g, '');
        
        if (value.length > 0) {
          if (value.length <= 3) {
            input.value = value;
          } else if (value.length <= 6) {
            input.value = value.slice(0, 3) + '-' + value.slice(3);
          } else {
            input.value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
          }
        }
      },
  
      validatePhoneNumber(phone) {
        if (!phone) return true; // Optional field
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
      },
  
      handlePhoneInput(event) {
        const input = event.target;
        this.formatPhoneNumber(event);
        
        // Clear validation state when input changes
        if (this.validatePhoneNumber(input.value) || !input.value) {
          input.setCustomValidity('');
        } else {
          input.setCustomValidity('Invalid phone number format');
        }
        
        // Update validation UI
        const form = input.closest('form');
        if (form.classList.contains('was-validated')) {
          // Force validation UI update
          input.classList.remove('is-valid', 'is-invalid');
          setTimeout(() => {
            form.classList.add('was-validated');
          }, 0);
        }
      },
  
      async handleSubmit(event) {
        const form = event.target;
        
        // Reset status
        this.loading = false;
        this.error = null;
        this.success = false;
  
        // Validate phone if provided
        const phoneInput = form.elements.phone;
        if (phoneInput.value && !this.validatePhoneNumber(phoneInput.value)) {
          phoneInput.setCustomValidity('Invalid phone number format');
          form.classList.add('was-validated');
          return;
        } else {
          phoneInput.setCustomValidity('');
        }
  
        // Validate form
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }
  
        try {
          // Show loading
          this.loading = true;
  
          const formData = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            subject: form.elements.subject.value,
            message: form.elements.message.value
          };
  
          const result = await EmailService.sendEmail(formData);
  
          if (result.success) {
            this.success = true;
            form.reset();
            form.classList.remove('was-validated');
          } else {
            this.error = result.message || 'Failed to send message. Please try again.';
          }
  
        } catch (error) {
          console.error('Form submission error:', error);
          this.error = 'An unexpected error occurred. Please try again later.';
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      EmailService.init();
    }
  }
  </script>
  
  <style scoped>
  
  </style>