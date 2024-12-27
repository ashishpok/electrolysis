import emailConfig from '@/data/email-config.json'
import fetch from 'node-fetch'

describe('Email API Integration', () => {
  // Skip the test by default
  it.skip('successfully sends an email via EmailJS API', async () => {
    console.log('Starting direct EmailJS API test...');
    console.log('Config being used:', {
      serviceId: emailConfig.SERVICE_ID,
      templateId: emailConfig.TEMPLATE_ID,
      hasPublicKey: !!emailConfig.PUBLIC_KEY
    });

    const data = {
      service_id: emailConfig.SERVICE_ID,
      template_id: emailConfig.TEMPLATE_ID,
      user_id: emailConfig.PUBLIC_KEY,
      template_params: {
        from_name: 'API Integration Test',
        reply_to: 'test@example.com',
        phone_number: '123-456-7890',
        subject: 'Integration Test',
        message: `API Test Email - ${new Date().toLocaleString()}`
      }
    };

    try {
      console.log('Sending request to EmailJS API with data:', JSON.stringify(data, null, 2));
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://localhost'
        },
        body: JSON.stringify(data)
      });

      const responseText = await response.text();
      console.log('API Response Status:', response.status);
      console.log('API Response Status Text:', response.statusText);
      console.log('API Response Body:', responseText);

      expect(response.status).toBe(200);
      
      console.log('Email sent successfully via API');

    } catch (error) {
      console.error('API test failed:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  }, 30000);
});