# Kenya Safari Tours - Cloud Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended for Node.js)
Railway is perfect for deploying Node.js applications with built-in database support.

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the `kenya-tour-website` project
4. Add environment variables:
   ```
   STRIPE_SECRET_KEY=sk_test_your_key_here
   RESEND_API_KEY=re_your_key_here
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_KEY=your_service_key
   ```
5. Deploy automatically

**Railway URL:** `https://your-app.railway.app`

### Option 2: Render
Render provides free tier hosting for web services.

**Steps:**
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `npm install`
5. Set start command: `node server.js`
6. Add environment variables
7. Deploy

**Render URL:** `https://your-app.onrender.com`

### Option 3: Heroku
Traditional PaaS solution with extensive add-on ecosystem.

**Steps:**
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create kenya-safari-app`
4. Add Git remote: `heroku git:remote -a kenya-safari-app`
5. Push: `git push heroku master`
6. Set config vars in Heroku dashboard

**Heroku URL:** `https://kenya-safari-app.herokuapp.com`

### Option 4: Vercel (Serverless Functions)
Perfect for hybrid static + serverless architecture.

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. Configure environment variables in dashboard

**Vercel URL:** `https://kenya-safari-tours.vercel.app`

### Option 5: DigitalOcean App Platform
Simple deployment with integrated database and scaling.

**Steps:**
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create new App
3. Connect GitHub repository
4. Configure build settings
5. Add environment variables
6. Deploy

**DigitalOcean URL:** `https://kenya-safari-app.ondigitalocean.app`

## 📋 Environment Variables Setup

### Required Variables
```bash
# Server Configuration
PORT=3000
NODE_ENV=production

# Stripe (Payment Processing)
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Supabase (Database)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key

# Resend (Email Service)
RESEND_API_KEY=re_your_api_key

# M-PESA (Mobile Payments)
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_BUSINESS_SHORT_CODE=174379
MPESA_PASS_KEY=your_pass_key
MPESA_CALLBACK_URL=https://yourdomain.com/api/mpesa/callback
```

### Get API Keys

#### Stripe Keys
1. Sign up at [stripe.com](https://stripe.com)
2. Go to Dashboard → Developers → API keys
3. Use test keys for development, live keys for production

#### Supabase Keys
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → API
4. Copy URL and keys

#### Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Go to Dashboard → API Keys
3. Create new API key

#### M-PESA API (Safaricom)
1. Register at [developer.safaricom.co.ke](https://developer.safaricom.co.ke)
2. Create new app
3. Get consumer key and secret

## 🗄️ Database Setup

### Run Database Migrations
1. Copy `database-setup.sql` to your Supabase SQL Editor
2. Run the script to create additional tables
3. Verify tables are created in Supabase dashboard

### Tables Created
- `mpesa_transactions` - M-PESA payment records
- `payment_transactions` - All payment records
- `booking_payments` - Booking payment summaries
- `newsletter_subscriptions` - Email subscribers
- `travel_packages` - Available safari packages

## 🔒 Security Configuration

### SSL Certificate
Most platforms provide free SSL certificates. For custom domains:
1. Purchase domain from registrar
2. Add CNAME record pointing to your app URL
3. Enable automatic SSL in platform settings

### Environment Security
- Never commit `.env` files to Git
- Use platform-specific environment variable management
- Rotate API keys regularly
- Enable webhook signature verification

## 📧 Email Configuration

### Resend Setup
1. Verify your domain in Resend dashboard
2. Add SPF and DKIM records to your domain DNS
3. Test email sending with sample data

### Custom Domain Emails
Update in Resend:
- From: `noreply@kenyasaritours.com`
- Reply-to: `cavin.otieno012@gmail.com`

## 📱 Payment Integration Testing

### Stripe Testing
Use test card numbers:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

### M-PESA Testing
- Use Safaricom test numbers
- Test with amounts like KSh 1
- Verify callback handling

## 🚀 Production Deployment Checklist

### Before Going Live
- [ ] Test all payment methods with test keys
- [ ] Verify email notifications are working
- [ ] Test form submissions and confirmations
- [ ] Check all images load correctly
- [ ] Verify datepickers work on all devices
- [ ] Test 404 error page
- [ ] Check mobile responsiveness
- [ ] Verify all links work correctly

### Environment Variables
- [ ] Set production API keys (not test keys)
- [ ] Configure production database URLs
- [ ] Set up production email domain
- [ ] Configure M-PESA production credentials

### Performance
- [ ] Enable CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images for web
- [ ] Enable compression (Gzip/Brotli)

### Monitoring
- [ ] Set up error logging
- [ ] Configure performance monitoring
- [ ] Set up uptime monitoring
- [ ] Configure payment success/failure alerts

## 🛠️ Troubleshooting

### Common Issues

#### Port Issues
```bash
# Check if port is in use
netstat -tlnp | grep :3000

# Set specific port
PORT=8080 node server.js
```

#### Database Connection
```javascript
// Test Supabase connection
const { data, error } = await supabase.from('contact_inquiries').select('count');
console.log(data, error);
```

#### Email Not Sending
1. Check Resend API key validity
2. Verify domain is verified in Resend
3. Check spam folder for test emails
4. Test with simple email sending

#### Payment Issues
1. Verify Stripe webhook endpoints
2. Check API key permissions
3. Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

### Debug Mode
```bash
# Run in development mode
NODE_ENV=development npm start

# Enable debug logging
DEBUG=* npm start
```

## 📞 Support

For deployment assistance:
- Email: cavin.otieno012@gmail.com
- Phone: +254 708 101 604
- WhatsApp: +254 708 101 604

## 🎯 Next Steps

1. Choose deployment platform (Railway recommended)
2. Set up environment variables
3. Configure custom domain
4. Test all functionality
5. Go live!
6. Monitor and optimize

Your Kenya Safari Tours website will be live and ready to accept bookings! 🦁🇰🇪