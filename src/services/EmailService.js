import emailjs from '@emailjs/browser';
import emailConfig from '@/data/email-config.json';

const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = emailConfig;

export default {
  init() {
    // Initialize with public key
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS initialized');
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  validateFormData(formData) {
    if (!formData.name?.trim()) return false;
    if (!formData.email?.trim() || !this.validateEmail(formData.email)) return false;
    if (!formData.subject?.trim()) return false;
    if (!formData.message?.trim()) return false;
    return true;
  },

  async sendEmail(formData) {
    try {
      // Validate form data
      if (!this.validateFormData(formData)) {
        return {
          success: false,
          message: 'Please fill in all required fields correctly.'
        };
      }

      // Create template parameters
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone || null,
        subject: formData.subject,
        message: formData.message
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Raw EmailJS response:', response);

      if (response.status === 200) {
        return {
          success: true,
          message: 'Thank you for your message. We will get back to you soon!'
        };
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }

    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      return {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      };
    }
  }
} 