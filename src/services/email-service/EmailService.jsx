import axios from 'axios';

// Use a hardcoded URL for now - you can change this to your server URL
const API_BASE_URL = 'http://localhost:5000';

class EmailService {
  static async sendContactForm(formData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error sending contact form:', error);
      
      // Check if it's a network error (server not running)
      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        return {
          success: false,
          error: 'Server is not running. Please start the backend server first.'
        };
      }
      
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again.'
      };
    }
  }
}

export default EmailService;
