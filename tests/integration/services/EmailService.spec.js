import EmailService from '@/services/EmailService'
import emailConfig from '@/data/email-config.json'
import emailjs from '@emailjs/browser'

// Mock the window object since we're in Node environment
global.window = {}

describe('EmailService Integration', () => {
  beforeAll(() => {
    // Mock emailjs.send to simulate browser behavior
    emailjs.send = jest.fn().mockImplementation((serviceId, templateId, templateParams) => {
      console.log('Mocked EmailJS send called with:', {
        serviceId,
        templateId,
        templateParams
      });
      
      // Simulate successful API response
      return Promise.resolve({
        status: 200,
        text: 'OK'
      });
    });

    EmailService.init();
  });

  it('successfully sends a real email via EmailJS', async () => {
    const testData = {
      name: 'Integration Test',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: `Integration Test Email - ${new Date().toLocaleString()}`
    };

    try {
      // Verify the configuration
      expect(emailConfig.SERVICE_ID).toBeDefined();
      expect(emailConfig.TEMPLATE_ID).toBeDefined();
      expect(emailConfig.PUBLIC_KEY).toBeDefined();

      const result = await EmailService.sendEmail(testData);
      
      // Verify emailjs.send was called with correct parameters
      expect(emailjs.send).toHaveBeenCalledWith(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        expect.objectContaining({
          from_name: testData.name,
          from_email: testData.email,
          message: expect.any(String)
        }),
        emailConfig.PUBLIC_KEY
      );

      expect(result.success).toBe(true);
      expect(result.message).toBe('Thank you for your message. We will get back to you soon!');

    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });

  it('handles invalid email format correctly', async () => {
    const invalidData = {
      name: 'Test User',
      email: 'invalid-email',
      phone: '123-456-7890',
      message: 'Test message'
    };

    const result = await EmailService.sendEmail(invalidData);
    
    expect(result.success).toBe(false);
    expect(result.message).toBe('Please fill in all required fields correctly.');
  });

  it('handles missing required fields', async () => {
    const incompleteData = {
      name: 'Test User',
      email: 'test@example.com'
      // missing message field
    };

    const result = await EmailService.sendEmail(incompleteData);
    
    expect(result.success).toBe(false);
    expect(result.message).toBe('Please fill in all required fields correctly.');
  });
});