# 🚀 Kenya Safari Tours - Quick Railway Deployment Checklist

**⚡ Total Time: 15-20 minutes**  
**📍 Start Here:** [railway.app](https://railway.app)  

---

## ✅ Step 1: Deploy to Railway (5 minutes)

### 1.1 Create Project
1. ✅ Sign in to [railway.app](https://railway.app) with GitHub
2. ✅ Click **"+ New Project"**
3. ✅ Select **"Deploy from GitHub repo"**
4. ✅ Choose repository: `OumaCavin/tour`
5. ✅ Click **"Deploy Now"**

### 1.2 Add Environment Variables (Copy-Paste Ready)
**Add these in Railway → Settings → Environment:**

```bash
# Server
NODE_ENV = production
PORT = 3000

# Stripe (Test Mode)
STRIPE_PUBLISHABLE_KEY = pk_test_51SQlePFl1uXcWbBh3uPz4Nd51YZqQxVX6u5et2rDj1U4N4MQiPiqgSLp4GvVvEwI0gvQR5GfAOrF6ZGfElrRw3DA00CPuA3w48
STRIPE_SECRET_KEY = sk_test_51SQlePFl1uXcWbBhq5NQlFgnWfk3kGI3XmzgsNJzCOjLXI3G3xAHeeusRtI5SfW373OQQrVoYFUzZXxgmramNqf900Qt2SK3DW

# Email (Resend)
RESEND_API_KEY = re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK

# Supabase
SUPABASE_URL = https://thmujhifulhmwpefjxyd.supabase.co
SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODIwNjgsImV4cCI6MjA3ODA1ODA2OH0.OoIbDIrAjcr9g0yNj5WQCwgxRtCrQiWMa7X09V9S44g
SUPABASE_SERVICE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ4MjA2OCwiZXhwIjoyMDc4MDU4MDY4fQ.kGHIJmEKwQkW8bLb7q2HW-2eU8iMVxYJq2UVjwMzTlE

# M-PESA (Complete Configuration)
MPESA_CONSUMER_KEY = QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
MPESA_CONSUMER_SECRET = wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
MPESA_BUSINESS_SHORT_CODE = 174379
MPESA_PASS_KEY = bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
MPESA_AUTH_URL = https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
MPESA_ONLINEPAYMENT_URL = https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest
MPESA_ENV = sandbox
MPESA_BUSINESS_SHORTCODE = 174379
MPESA_PARTY_B = 174379
MPESA_CALLBACK_URL = https://your-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL = https://your-project-name.railway.app/api/mpesa-timeout

# Security
JWT_SECRET = kenya-safari-tours-jwt-secret-2025-production
CORS_ORIGIN = https://oumacavin.github.io

# Email (Gmail - Generate app password)
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = cavin.otieno012@gmail.com
SMTP_PASS = your_gmail_app_password_here
FROM_EMAIL = cavin.otieno012@gmail.com
FROM_NAME = Kenya Safari Tours

# Business Info
BUSINESS_NAME = Kenya Safari Tours
BUSINESS_EMAIL = cavin.otieno012@gmail.com
BUSINESS_PHONE = +254708101604
BUSINESS_ADDRESS = Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya
```

### 1.3 Wait for Deployment
- ✅ Railway will auto-deploy after adding variables
- ✅ Watch "Deploy" tab for success status
- ⏱️ Takes 3-5 minutes

### 1.4 Get Your URL
1. ✅ Go to **Settings** → **Domains**
2. ✅ Copy your **`.railway.app`** URL
3. ✅ Example: `https://safari-tours-backend.railway.app`

---

## ✅ Step 2: Setup Gmail App Password (2 minutes)

### 2.1 Enable 2FA
1. ✅ Go to [myaccount.google.com](https://myaccount.google.com)
2. ✅ **Security** → **2-Step Verification** (enable if needed)

### 2.2 Generate App Password
1. ✅ **Security** → **App passwords**
2. ✅ Select **Mail** + **Computer**
3. ✅ Click **Generate**
4. ✅ **Copy 16-character password** (e.g., "abcd efgh ijkl mnop")

### 2.3 Update Railway
1. ✅ Railway → Settings → Environment
2. ✅ Update `SMTP_PASS` with new app password
3. ✅ Redeploy project

---

## ✅ Step 3: Update M-PESA URLs (1 minute)

After deployment, update these with your actual Railway URL:

```bash
MPESA_CALLBACK_URL = https://your-actual-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL = https://your-actual-project-name.railway.app/api/mpesa-timeout
```

---

## ✅ Step 4: Test Everything (5 minutes)

### 4.1 Health Check
Visit: `https://your-project-name.railway.app/api/health`
Should return:
```json
{
  "status": "OK",
  "services": {
    "stripe": "connected",
    "supabase": "connected", 
    "resend": "connected"
  }
}
```

### 4.2 Test Contact Form
1. ✅ Go to: https://oumacavin.github.io/tour/contact.html
2. ✅ Fill out and submit form
3. ✅ Check email: cavin.otieno012@gmail.com

### 4.3 Test Stripe Payment
1. ✅ Go to: https://oumacavin.github.io/tour/payment.html
2. ✅ Use test card: `4242 4242 4242 4242`
3. ✅ Any future date, any CVC, any ZIP

### 4.4 Test M-PESA Payment
1. ✅ Go to: https://oumacavin.github.io/tour/payment.html
2. ✅ Select **M-PESA** payment method
3. ✅ Enter test phone: `0708101604`
4. ✅ Enter any amount (e.g., 100)
5. ✅ Click **"Initiate M-PESA Payment"**
6. ✅ Check phone for STK push prompt
7. ✅ Enter M-PESA PIN: `1234` (sandbox default)

---

## 🎯 Your Credentials Summary

| Service | Details |
|---------|---------|
| **Repository** | https://github.com/OumaCavin/tour.git |
| **Stripe Test** | pk_test_... and sk_test_... |
| **Resend API** | re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK |
| **M-PESA Key** | QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd |
| **Email** | cavin.otieno012@gmail.com |
| **GitHub Pages** | https://oumacavin.github.io/tour/ |
| **Railway Backend** | `https://your-project-name.railway.app` |

---

## 🚨 Important Notes

1. **⏰ M-PESA URLs:** Update after getting your Railway URL
2. **📧 Gmail App Password:** Required for email functionality
3. **🔄 Redeploy:** After changing environment variables
4. **🧪 Test Mode:** All payments are in test mode (no real money)

---

## ✅ Success Checklist

- [ ] Railway deployment successful
- [ ] Health check responding
- [ ] Gmail app password configured
- [ ] Contact form sending emails
- [ ] Stripe test payments working
- [ ] M-PESA test payments working
- [ ] M-PESA URLs updated with actual Railway URL
- [ ] Frontend connected to Railway backend

**🎉 You're live! Your Kenya Safari Tours website is now running on Railway!**