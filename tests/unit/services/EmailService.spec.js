import EmailService from '@/services/EmailService'
import emailjs from '@emailjs/browser'
import emailConfig from '@/data/email-config.json'

// Mock emailjs
jest.mock('@emailjs/browser')

describe('EmailService', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  it('successfully sends a test email', async () => {
    // Mock successful response
    emailjs.send.mockResolvedValue({
      status: 200,
      text: 'OK'
    })

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: 'Test message'
    }

    const result = await EmailService.sendEmail(testData)

    // Verify emailjs.send was called with correct parameters
    expect(emailjs.send).toHaveBeenCalledWith(
      emailConfig.SERVICE_ID,
      emailConfig.TEMPLATE_ID,
      {
        from_name: testData.name,
        from_email: testData.email,
        phone: testData.phone,
        message: testData.message,
        to_email: 'electrolysis.info@gmail.com'
      },
      emailConfig.PUBLIC_KEY
    )

    // Verify response
    expect(result).toEqual({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
  })

  it('handles email sending failure', async () => {
    // Mock failure response
    emailjs.send.mockRejectedValue(new Error('Failed to send email'))

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: 'Test message'
    }

    const result = await EmailService.sendEmail(testData)

    // Verify error response
    expect(result).toEqual({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.'
    })
  })

  it('validates required fields before sending', async () => {
    const invalidData = {
      name: '',
      email: 'invalid-email',
      message: ''
    }

    const result = await EmailService.sendEmail(invalidData)

    // Verify emailjs.send was not called
    expect(emailjs.send).not.toHaveBeenCalled()

    // Verify error response
    expect(result).toEqual({
      success: false,
      message: 'Please fill in all required fields correctly.'
    })
  })
}) 