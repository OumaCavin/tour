# 🚀 Railway Deployment Setup Guide
## Kenya Safari Tours Backend Deployment

### Step 1: Create Railway Account

1. **Visit Railway Platform**
   - Go to [https://railway.app](https://railway.app)
   - Click **"Login"** or **"Get Started for Free"**

2. **Sign Up Options**
   - **Option A**: GitHub Login (Recommended)
     - Click **"Login with GitHub"**
     - Authorize Railway to access your GitHub account
     - This allows automatic deployment from your repository
   
   - **Option B**: Email Signup
     - Enter your email and create a password
     - Verify your email address

3. **Complete Account Setup**
   - Add your full name
   - Set up your workspace name (e.g., "Safari Tours")
   - Accept Railway's terms of service

---

### Step 2: Connect Your GitHub Repository

1. **Create New Project**
   - In Railway Dashboard, click **"New Project"**
   - Select **"Deploy from GitHub repo"**

2. **Authorize GitHub Access**
   - If not already connected, Railway will request GitHub permissions
   - Click **"Authorize railwayapp"**
   - Select your repositories or grant access to all

3. **Select Repository**
   - Find and select your repository: **OumaCavin/tour**
   - Click **"Deploy Now"**

4. **Project Configuration**
   - Railway will auto-detect it's a Node.js project
   - Name your project: **"Kenya Safari Tours Backend"**
   - Railway will begin the deployment process

---

### Step 3: Get Railway Deployment Credentials

1. **View Deployment Details**
   - Once deployed, click on your project
   - Go to **"Settings"** tab
   - Find **"Domains"** section

2. **Your Railway URL**
   - You'll see: `https://your-project-name.railway.app`
   - Example: `https://safari-tours-backend.railway.app`
   - **Save this URL** - this is your `BASE_URL`

3. **Project ID (for API access)**
   - In Settings > General
   - Copy the **"Project ID"**
   - Format: `safari-tours-backend-abc123`

4. **Environment Variables Setup**
   - Go to **"Variables"** tab
   - Click **"New Variable"** to add each key-value pair

---

### Step 4: Configure Environment Variables in Railway

### **Option A: Free/Non-Commercial Setup (Recommended to Start)**

Add these environment variables (FREE tiers - no business verification required):

```
NODE_ENV=production
PORT=3000
BASE_URL=https://your-project-name.railway.app
PAYMENT_MODE=test

# Stripe Test Keys (FREE - no business verification needed)
# Get from: https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_test_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_test_publishable_key

# Resend Free Tier (FREE - 3,000 emails/month)
# Get from: https://resend.com (no domain setup needed)
RESEND_API_KEY=re_your_actual_resend_api_key

# Supabase (Already configured)
SUPABASE_URL=https://thmujhifulhmwpefjxyd.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ7...
```

### **Option B: Business/Commercial Setup (Optional - for monetization)**

For business/commercial use, add production keys and business credentials:

```
NODE_ENV=production
PORT=3000
BASE_URL=https://your-project-name.railway.app
PAYMENT_MODE=live

# Stripe Production Keys (requires business verification)
STRIPE_SECRET_KEY=sk_live_your_actual_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_stripe_publishable_key

# Resend with Custom Domain (optional - for business)
RESEND_API_KEY=re_your_actual_resend_key
RESEND_DOMAIN=kenyasafaritours.com

# M-PESA Business Integration (5-10 days approval)
MPESA_CONSUMER_KEY=your_actual_consumer_key
MPESA_CONSUMER_SECRET=your_actual_consumer_secret
MPESA_SHORTCODE=your_actual_shortcode
MPESA_PASSKEY=your_actual_passkey
MPESA_CALLBACK_URL=https://your-project-name.railway.app/api/mpesa-callback
```

**💡 Start with Option A (Free) - you can always upgrade to Option B later!**

---

### Step 5: Update Frontend Configuration

1. **Create Environment Config File**
   - Create `js/config.js` in your project:
   ```javascript
   // API Configuration
   window.API_CONFIG = {
     BASE_URL: 'https://your-project-name.railway.app',
     STRIPE_PUBLISHABLE_KEY: 'pk_live_your_actual_stripe_key'
   };
   ```

2. **Update main.js**
   - Replace localhost URLs with Railway URL
   - Add config.js script to all HTML pages

---

### Step 6: Deploy and Test

1. **Trigger New Deployment**
   - In Railway, go to **"Deploy"** tab
   - Click **"Deploy"** to trigger new deployment with environment variables

2. **Check Deployment Status**
   - Monitor logs in real-time
   - Wait for **"Build completed"** and **"Service started"**

3. **Test Your API**
   - Visit: `https://your-project-name.railway.app/api/health`
   - Should return: `{ "status": "ok", "service": "Safari Tours API" }`

4. **Update Frontend Integration**
   - Test form submissions
   - Verify payment processing
   - Check email notifications

---

### Step 7: Get Your Railway Credentials Summary

After setup, you'll have these credentials:

1. **Project URL**: `https://safari-tours-backend.railway.app`
2. **Project ID**: `safari-tours-backend-abc123`
3. **API Endpoint**: `https://safari-tours-backend.railway.app/api`
4. **Environment Variables**: All configured in Railway dashboard

---

## 🔑 **Important Security Notes**

- **Never commit** environment variables to GitHub
- **Keep** secret keys secure and only use in production
- **Use** environment variables for all sensitive data
- **Monitor** your Railway usage and costs

---

## 📞 **Support & Troubleshooting**

- **Railway Docs**: [https://docs.railway.app](https://docs.railway.app)
- **GitHub Issues**: For deployment problems
- **Logs**: Always check Railway deployment logs for errors

---

## ✅ **Next Steps After Railway Setup**

1. Get Stripe production API keys
2. Set up Resend production API key
3. Apply for M-PESA business integration
4. Update environment variables with production keys
5. Test end-to-end payment flow
6. Set up custom domain (optional)

**Your Kenya Safari Tours backend will be live and ready for payments!**