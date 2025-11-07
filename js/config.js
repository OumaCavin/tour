/**
 * Kenya Safari Tours - API Configuration
 * 
 * NON-COMMERCIAL/FREE APP SETUP:
 * ✅ Use test keys (pk_test_...) - no business verification required
 * ✅ Get test keys from: https://dashboard.stripe.com/apikeys
 * ✅ Perfect for testing, demonstrations, or free projects
 * 
 * COMMERCIAL/BUSINESS SETUP:
 * ✅ Use live keys (pk_live_...) - requires business verification
 * ✅ Requires bank account and business details
 * ✅ For revenue-generating safari tours
 * 
 * RAILWAY DEPLOYMENT:
 * 1. Deploy backend to Railway (15 minutes)
 * 2. Update BASE_URL with your Railway deployment URL
 * 3. Add environment variables in Railway dashboard
 */

window.API_CONFIG = {
  // Railway Deployment URL (update after deployment)
  BASE_URL: 'https://your-project-name.railway.app',
  
  // Stripe Configuration - Use TEST keys for non-commercial/free app
  // Get test keys from https://dashboard.stripe.com/apikeys (no business verification required)
  STRIPE_PUBLISHABLE_KEY: 'pk_test_51234567890abcdef', // Replace with your actual test key
  
  // Payment mode: 'test' for development/testing, 'live' for production
  PAYMENT_MODE: 'test',
  
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
  console.log('Kenya Safari Tours - API Configuration loaded:', {
    baseURL: window.API_CONFIG.BASE_URL,
    environment: window.API_CONFIG.BASE_URL.includes('localhost') ? 'development' : 'production',
    paymentMode: window.API_CONFIG.PAYMENT_MODE,
    stripeKeyType: window.API_CONFIG.STRIPE_PUBLISHABLE_KEY.startsWith('pk_live_') ? 'production' : 'test',
    ready: window.API_CONFIG.BASE_URL !== 'https://your-project-name.railway.app' && window.API_CONFIG.STRIPE_PUBLISHABLE_KEY.startsWith('pk_')
  });
});