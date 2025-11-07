/**
 * Kenya Safari Tours - API Configuration
 * Update these values after deploying to Railway and getting API keys
 */

window.API_CONFIG = {
  // Railway Deployment URL (update after deployment)
  BASE_URL: 'https://your-project-name.railway.app',
  
  // Stripe Configuration (update after getting production keys)
  STRIPE_PUBLISHABLE_KEY: 'pk_live_your_actual_stripe_publishable_key',
  
  // API Endpoints
  ENDPOINTS: {
    HEALTH: '/api/health',
    CONTACT: '/api/contact',
    CREATE_PAYMENT_INTENT: '/api/create-payment-intent',
    MPESA_PAYMENT: '/api/mpesa-payment',
    SEND_CONFIRMATION: '/api/send-confirmation',
    GET_BOOKING: '/api/booking'
  },
  
  // Business Information
  BUSINESS: {
    NAME: 'Kenya Safari Tours',
    EMAIL: 'cavin.otieno012@gmail.com',
    PHONE: '+254708101604'
  }
};

// Development/Production Detection
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  // Development environment
  window.API_CONFIG.BASE_URL = 'http://localhost:3000';
} else {
  // Production environment
  // Use Railway URL for production - UPDATE THIS AFTER RAILWAY DEPLOYMENT
  // Example: window.API_CONFIG.BASE_URL = 'https://safari-tours-backend.railway.app';
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('API Configuration loaded:', {
    baseURL: window.API_CONFIG.BASE_URL,
    environment: window.API_CONFIG.BASE_URL.includes('localhost') ? 'development' : 'production',
    stripeConfigured: window.API_CONFIG.STRIPE_PUBLISHABLE_KEY.startsWith('pk_live_')
  });
});