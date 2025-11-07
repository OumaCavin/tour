# 🚀 Kenya Safari Tours - Complete Railway Deployment Guide

**Project:** Kenya Safari Tours Website  
**Repository:** https://github.com/OumaCavin/tour.git  
**Platform:** Railway.app  
**Time Required:** 15-20 minutes  

## 📋 Pre-Deployment Checklist

✅ **GitHub Repository:** https://github.com/OumaCavin/tour.git  
✅ **Stripe Test Keys:** Ready (pk_test_ and sk_test_)  
✅ **Resend API Key:** Ready (re_...)  
✅ **M-PESA Credentials:** Ready (Consumer Key, Secret, Pass Key)  
✅ **Supabase Database:** Connected (https://thmujhifulhmwpefjxyd.supabase.co)  
✅ **Email Account:** cavin.otieno012@gmail.com  

---

## 🏗️ Step 1: Create Railway Project

### 1.1 Sign Up/Log In to Railway
1. Go to **[railway.app](https://railway.app)**
2. Click "Login" → Choose "Sign in with GitHub"
3. Authorize Railway to access your GitHub account
4. Your dashboard will load with existing projects

### 1.2 Create New Project
1. Click **"+ New Project"** button
2. Select **"Deploy from GitHub repo"**
3. Find and select your repository: `OumaCavin/tour`
4. Click **"Deploy Now"**

**Note:** Railway will automatically detect Node.js and create a deployment

---

## ⚙️ Step 2: Configure Environment Variables

### 2.1 Access Project Settings
1. In your Railway dashboard, click on your project
2. Go to **"Settings"** tab (left sidebar)
3. Click **"Environment"** section
4. Click **"+ Add Variable"** for each variable below

### 2.2 Add All Required Environment Variables

**Add these variables one by one:**

#### 🏗️ **Server Configuration**
```
NODE_ENV = production
PORT = 3000
```

#### 💳 **Stripe Configuration (Test Mode)**
```
STRIPE_PUBLISHABLE_KEY = pk_test_51SQlePFl1uXcWbBh3uPz4Nd51YZqQxVX6u5et2rDj1U4N4MQiPiqgSLp4GvVvEwI0gvQR5GfAOrF6ZGfElrRw3DA00CPuA3w48
STRIPE_SECRET_KEY = sk_test_51SQlePFl1uXcWbBhq5NQlFgnWfk3kGI3XmzgsNJzCOjLXI3G3xAHeeusRtI5SfW373OQQrVoYFUzZXxgmramNqf900Qt2SK3DW
```

#### 📧 **Resend Email Service**
```
RESEND_API_KEY = re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK
```

#### 🗄️ **Supabase Database**
```
SUPABASE_URL = https://thmujhifulhmwpefjxyd.supabase.co
SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODIwNjgsImV4cCI6MjA3ODA1ODA2OH0.OoIbDIrAjcr9g0yNj5WQCwgxRtCrQiWMa7X09V9S44g
SUPABASE_SERVICE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ4MjA2OCwiZXhwIjoyMDc4MDU4MDY4fQ.kGHIJmEKwQkW8bLb7q2HW-2eU8iMVxYJq2UVjwMzTlE
```

#### 📱 **M-PESA Configuration**
```
MPESA_CONSUMER_KEY = QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
MPESA_CONSUMER_SECRET = wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
MPESA_BUSINESS_SHORT_CODE = 174379
MPESA_PASS_KEY = bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
MPESA_CALLBACK_URL = https://your-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL = https://your-project-name.railway.app/api/mpesa-timeout
```

#### 🔒 **Security & Configuration**
```
JWT_SECRET = kenya-safari-tours-jwt-secret-2025-production
CORS_ORIGIN = https://oumacavin.github.io
DATABASE_PASSWORD = Airtel!23!23
```

#### 📮 **SMTP Alternative (Gmail)**
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = cavin.otieno012@gmail.com
SMTP_PASS = your_gmail_app_password_here
FROM_EMAIL = cavin.otieno012@gmail.com
FROM_NAME = Kenya Safari Tours
```

#### 💰 **Business Information**
```
BUSINESS_NAME = Kenya Safari Tours
BUSINESS_EMAIL = cavin.otieno012@gmail.com
BUSINESS_PHONE = +254708101604
BUSINESS_ADDRESS = Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya
```

### 2.3 Important Notes:
- **Replace `your-project-name`** in M-PESA URLs with your actual Railway project name
- **SMTP_PASS** needs to be a Gmail App Password (see Step 5)
- All other values are your actual credentials

---

## 🚀 Step 3: Deploy Backend Server

### 3.1 Railway Deployment Process
1. After adding environment variables, Railway will automatically deploy
2. Click **"Deploy"** tab to see progress
3. Wait for deployment to complete (usually 3-5 minutes)
4. Look for "Success" status with green checkmark

### 3.2 Get Your Deployment URL
1. Go to **"Settings"** → **"Domains"**
2. Find your **".railway.app"** URL
3. **Copy the URL** - you'll need this for configuration
4. Example: `https://safari-tours-backend.railway.app`

---

## 📧 Step 4: Set Up Gmail App Password (Required)

### 4.1 Enable 2-Factor Authentication
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **"Security"** (left sidebar)
3. Turn on **"2-Step Verification"** (if not already enabled)

### 4.2 Generate App Password
1. In **Security** section, find **"App passwords"**
2. Select **"Mail"** and **"Computer"**
3. Click **"Generate"**
4. **Copy the 16-character password** (e.g., "abcd efgh ijkl mnop")
5. **Update Railway Environment Variable:**
   - Go to Railway project → Settings → Environment
   - Update `SMTP_PASS` with your new app password

---

## 🔧 Step 5: Update Frontend Configuration

### 5.1 Get Actual Railway URL
After deployment, note your Railway URL: `https://your-project-name.railway.app`

### 5.2 Update Config File
Create a new file `updated-config.js` with your Railway URL:

```javascript
// Update these values with your actual Railway URL
window.API_CONFIG = {
  // Replace with your actual Railway URL
  BASE_URL: 'https://your-project-name.railway.app',
  
  // Your Stripe test key (already configured)
  STRIPE_PUBLISHABLE_KEY: 'pk_test_51SQlePFl1uXcWbBh3uPz4Nd51YZqQxVX6u5et2rDj1U4N4MQiPiqgSLp4GvVvEwI0gvQR5GfAOrF6ZGfElrRw3DA00CPuA3w48',
  
  // Test mode for non-commercial use
  PAYMENT_MODE: 'test',
  
  // Email configuration
  EMAIL: {
    ENABLED: true,
    PROVIDER: 'resend',
    FROM_EMAIL: 'onboarding@resend.dev',
    REPLY_TO: 'cavin.otieno012@gmail.com',
    FREE_TIER: true
  }
};
```

### 5.3 Update Your Repository
```bash
# Clone your repository
git clone https://github.com/OumaCavin/tour.git
cd tour

# Update config.js with your Railway URL
# Edit kenya-tour-website/js/config.js and change:
# BASE_URL: 'https://your-project-name.railway.app'

# Add and commit changes
git add .
git commit -m "Update config with Railway deployment URL"

# Push to GitHub
git push origin main
```

---

## 🧪 Step 6: Test Your Deployment

### 6.1 Health Check
Visit: `https://your-project-name.railway.app/api/health`

You should see:
```json
{
  "status": "OK",
  "timestamp": "2025-11-07T19:39:XX.XXXZ",
  "services": {
    "stripe": "connected",
    "supabase": "connected",
    "resend": "connected"
  }
}
```

### 6.2 Test Endpoints
- **Contact Form:** `https://oumacavin.github.io/tour/contact.html`
- **Payment Page:** `https://oumacavin.github.io/tour/payment.html`
- **Stripe Test:** Use test card `4242 4242 4242 4242`

### 6.3 Test Email
Use the contact form to test email functionality:
1. Go to contact page
2. Fill out form
3. Submit
4. Check your email (cavin.otieno012@gmail.com) for confirmation

---

## 🔄 Step 7: M-PESA URL Updates

### 7.1 Update M-PESA Callback URLs
After getting your actual Railway URL, update these environment variables:

1. Go to Railway project → Settings → Environment
2. Update:
   ```
   MPESA_CALLBACK_URL = https://your-project-name.railway.app/api/mpesa-callback
   MPESA_TIMEOUT_URL = https://your-project-name.railway.app/api/mpesa-timeout
   ```
3. Redeploy the project

### 7.2 M-PESA Test
- **Test Phone:** 0708101604
- **Business Code:** 174379
- **Amount:** Any amount (test mode)

---

## 🎯 Step 8: Quick Reference

### Your Actual Credentials Summary:
- **Repository:** https://github.com/OumaCavin/tour.git
- **Stripe Test Keys:** pk_test_... and sk_test_...
- **Resend API:** re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK
- **M-PESA Consumer Key:** QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
- **M-PESA Consumer Secret:** wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
- **Supabase URL:** https://thmujhifulhmwpefjxyd.supabase.co
- **Email:** cavin.otieno012@gmail.com

### Final URLs:
- **GitHub Pages:** https://oumacavin.github.io/tour/
- **Railway Backend:** `https://your-project-name.railway.app`
- **Health Check:** `https://your-project-name.railway.app/api/health`

---

## 🆘 Troubleshooting

### Common Issues:
1. **Environment variables not loading:** Redeploy after adding variables
2. **CORS errors:** Check CORS_ORIGIN in environment variables
3. **Email not working:** Verify Resend API key and SMTP app password
4. **Payment failures:** Confirm Stripe test keys are correctly set

### Railway Commands:
```bash
# View logs
railway logs

# Redeploy
railway up

# Check environment
railway variables
```

---

## ✅ Success Checklist

- [ ] Railway project created and deployed
- [ ] All environment variables added
- [ ] Gmail app password generated and configured
- [ ] Health check endpoint responding
- [ ] Contact form working with email
- [ ] Stripe test payments working
- [ ] M-PESA URLs updated with actual Railway URL
- [ ] Frontend configured with Railway URL

**🎉 Congratulations! Your Kenya Safari Tours website is now live on Railway!**