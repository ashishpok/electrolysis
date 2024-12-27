<template>
  <main class="main">
    <SectionTitle 
      title="Contact Us"
      subtitle="Get in touch with us"
      id="contact-title"
    />
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-6 offset-lg-3">
            <BaseForm 
              :fields="formFields"
              :submit-handler="handleSubmit"
              submit-button-text="Send Message"
              loading-message="Sending message..."
              success-message="Your message has been sent. Thank you!"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SectionTitle from '@/components/common/SectionTitle.vue'
import BaseForm from '@/components/common/BaseForm.vue'
import EmailService from '@/services/EmailService'

export default {
  name: 'ContactView',
  components: {
    SectionTitle,
    BaseForm
  },
  data() {
    return {
      formFields: [
        {
          type: 'text',
          name: 'name',
          placeholder: 'Your Name *',
          required: true,
          invalidFeedback: 'Please provide your name.',
          containerClass: 'col-md-6'
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'Your Email *',
          required: true,
          invalidFeedback: 'Please provide a valid email.',
          containerClass: 'col-md-6'
        },
        {
          type: 'tel',
          name: 'phone',
          placeholder: 'US Phone Number (Optional)',
          maxlength: 14,
          invalidFeedback: 'Please enter a valid US phone number.',
          containerClass: 'col-md-6'
        },
        {
          type: 'select',
          name: 'subject',
          required: true,
          invalidFeedback: 'Please select a reason for contact.',
          containerClass: 'col-md-6',
          options: [
            { value: '', text: 'Select a Reason*', disabled: true, selected: true },
            { value: 'Appointment', text: 'Schedule an Appointment' },
            { value: 'Services', text: 'Questions about Services' },
            { value: 'Pricing', text: 'Pricing Information' },
            { value: 'Preparation', text: 'Pre/Post Treatment Care' },
            { value: 'Location', text: 'Location & Directions' },
            { value: 'Other', text: 'Other Inquiry' }
          ]
        },
        {
          type: 'textarea',
          name: 'message',
          placeholder: 'Message',
          required: true,
          containerClass: 'col-12',
          invalidFeedback: 'Please provide your message.'
        }
      ]
    }
  },
  methods: {
    async handleSubmit(formData) {
      return await EmailService.sendEmail(formData)
    }
  },
  mounted() {
    EmailService.init()
  }
}
</script>

<style scoped>

</style>