<template>
  <form @submit.prevent="handleSubmit" class="php-email-form" novalidate>
    <div class="row gy-4">
      <template v-for="field in fields" :key="field.name">
        <div :class="field.containerClass">
          <!-- Input -->
          <template v-if="field.type !== 'select' && field.type !== 'textarea'">
            <input
              :type="field.type"
              :name="field.name"
              :class="field.class || 'form-control'"
              :placeholder="field.placeholder"
              :required="field.required"
              :maxlength="field.maxlength"
              @input="field.type === 'tel' ? handlePhoneInput($event) : null"
              v-model="formData[field.name]"
            >
            <div class="invalid-feedback">
              {{ field.invalidFeedback || `Please provide ${field.name}.` }}
            </div>
          </template>

          <!-- Select -->
          <template v-else-if="field.type === 'select'">
            <select
              :name="field.name"
              :class="field.class || 'form-select'"
              :required="field.required"
              v-model="formData[field.name]"
            >
              <option v-for="option in field.options" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
            <div class="invalid-feedback">
              {{ field.invalidFeedback || 'Please select an option.' }}
            </div>
          </template>

          <!-- Textarea -->
          <template v-else>
            <textarea
              :name="field.name"
              :class="field.class || 'form-control'"
              :rows="field.rows || 6"
              :placeholder="field.placeholder"
              :required="field.required"
              v-model="formData[field.name]"
            ></textarea>
            <div class="invalid-feedback">
              {{ field.invalidFeedback || 'Please provide a message.' }}
            </div>
          </template>
        </div>
      </template>

      <!-- Status Messages -->
      <div class="col-12 text-center">
        <div class="loading" :style="{ display: loading ? 'block' : 'none', background: 'transparent' }">
          {{ loadingMessage }}
        </div>
        <div class="error-message" :style="{ display: error ? 'block' : 'none' }">
          {{ error }}
        </div>
        <div class="sent-message" :style="{ display: success ? 'block' : 'none' }">
          {{ successMessage }}
        </div>

        <button type="submit">{{ submitButtonText }}</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.php-email-form input[type="tel"]::placeholder {
  color: #6c757d !important;
  opacity: 0.6;
}
</style>

<script>
export default {
  name: 'BaseForm',
  props: {
    fields: {
      type: Array,
      required: true
    },
    submitButtonText: {
      type: String,
      default: 'Submit'
    },
    loadingMessage: {
      type: String,
      default: 'Loading...'
    },
    successMessage: {
      type: String,
      default: 'Your message has been sent. Thank you!'
    },
    submitHandler: {
      type: Function,
      required: true
    },
    validators: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formData: {},
      loading: false,
      error: null,
      success: false
    }
  },
  created() {
    // Initialize formData with field names
    this.fields.forEach(field => {
      this.formData[field.name] = ''
    })
  },
  methods: {
    formatPhoneNumber(event) {
      let input = event.target;
      // Remove all non-digits
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
      
      // First, strip all non-digits
      const stripped = phone.replace(/\D/g, '');
      
      // Check if we have exactly 10 digits
      if (stripped.length !== 10) return false;
      
      // Allow these formats:
      // 1234567890
      // 123-456-7890
      // 123 456 7890
      // (123) 456-7890
      // (123) 456 7890
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      
      return phoneRegex.test(phone);
    },

    handlePhoneInput(event) {
      const input = event.target;
      // Don't format if the user is using spaces or parentheses
      if (!input.value.includes('(') && !input.value.includes(' ')) {
        this.formatPhoneNumber(event);
      }
      
      // Clear validation state when input changes
      if (this.validatePhoneNumber(input.value) || !input.value) {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity('Invalid phone number format');
      }
      
      // Update validation UI
      const form = input.closest('form');
      if (form.classList.contains('was-validated')) {
        input.classList.remove('is-valid', 'is-invalid');
        setTimeout(() => {
          form.classList.add('was-validated');
        }, 0);
      }
    },

    validateField(field, value) {
      // Handle phone validation internally
      if (field === 'phone') {
        return this.validatePhoneNumber(value);
      }
      
      // Handle other custom validators
      const validator = this.validators[field];
      if (!validator) return true;
      return validator(value);
    },

    /*
    * Handle form submission, expect a response with a success boolean and an optional message
    interface SubmitResponse {
        success: boolean;
        message?: string;  // Optional error message if success is false
    }
    */
    async handleSubmit(event) {
      const form = event.target;
      
      // Reset status
      this.loading = false;
      this.error = null;
      this.success = false;

      // Custom validation
      for (const field of this.fields) {
        const value = this.formData[field.name];
        const input = form.elements[field.name];
        
        // Skip validation for optional fields if empty
        if (!field.required && !value) {
          input.setCustomValidity('');
          continue;
        }

        // Handle phone field specially
        if (field.type === 'tel') {
          if (value && !this.validatePhoneNumber(value)) {
            input.setCustomValidity('Invalid phone number format');
            form.classList.add('was-validated');
            return;
          }
          input.setCustomValidity('');
          continue;
        }

        // Run other validators
        if (this.validators[field.name] && !this.validateField(field.name, value)) {
          input.setCustomValidity('Invalid input');
          form.classList.add('was-validated');
          return;
        } else {
          input.setCustomValidity('');
        }
      }

      // Form validation
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      try {
        this.loading = true;
        const result = await this.submitHandler(this.formData);
        
        if (result.success) {
          this.success = true;
          this.formData = {};
          form.reset();
          form.classList.remove('was-validated');
        } else {
          this.error = result.message || 'Submission failed. Please try again.';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.error = 'An unexpected error occurred. Please try again later.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script> 