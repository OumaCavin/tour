# 🚀 Railway Deployment Guide - Kenya Safari Tours
**Complete Step-by-Step Instructions for Backend Deployment**

---

## 📋 **What You'll Accomplish**

✅ Deploy your Node.js backend to Railway.app  
✅ Enable M-PESA and Stripe payment processing  
✅ Connect Supabase database for contact forms  
✅ Set up email notifications via Resend  
✅ Get your live Railway URL for M-PESA callbacks  
✅ Enable full website functionality  

**⏱️ Total Time: 10-15 minutes**

---

## 🎯 **Step 1: Create Railway Account & Project (3 minutes)**

### 1.1 Go to Railway.app
1. Open your browser and visit: **https://railway.app**
2. Click **"Login"** (top right)
3. Sign in with your **GitHub account** (same account as your repository)

### 1.2 Create New Project
1. Once logged in, click **"New Project"** (blue button)
2. Select **"Deploy from GitHub repo"**
3. In the repository list, find and select: **OumaCavin/tour**
4. Click **"Deploy Now"** (green button)

### 1.3 Wait for Initial Setup
- Railway will automatically detect it's a Node.js project
- You'll see deployment logs in the console
- **This takes 2-3 minutes** - be patient!

---

## 🗝️ **Step 2: Add All Environment Variables (5 minutes)**

### 2.1 Navigate to Environment Variables
1. In your Railway project dashboard, click **"Settings"** (left sidebar)
2. Click **"Environment"** tab
3. You'll see **"Add Variable"** button

### 2.2 Add All Variables (Copy & Paste)

**⚠️ IMPORTANT: Add ALL variables - payment processing won't work without them!**

#### **M-PESA Configuration**
Click **"Add Variable"** and add each one:

```
MPESA_CONSUMER_KEY=QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
```
```
MPESA_CONSUMER_SECRET=wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
```
```
MPESA_BUSINESS_SHORT_CODE=174379
```
```
MPESA_PASS_KEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
```
```
MPESA_AUTH_URL=https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
```
```
MPESA_ONLINEPAYMENT_URL=https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest
```
```
MPESA_ENV=sandbox
```
```
MPESA_BUSINESS_SHORTCODE=174379
```
```
MPESA_PARTY_B=174379
```

**🔄 TEMPORARY M-PESA Callbacks (We'll update these later!):**
```
MPESA_CALLBACK_URL=https://your-project-name.railway.app/api/mpesa-callback
```
```
MPESA_TIMEOUT_URL=https://your-project-name.railway.app/api/mpesa-timeout
```

#### **Stripe Payment Processing**
```
STRIPE_PUBLISHABLE_KEY=pk_test_51SQlePFl1uXcWbBh3uPz4Nd51YZqQxVX6u5et2rDj1U4N4MQiPiqgSLp4GvVvEwI0gvQR5GfAOrF6ZGfElrRw3DA00CPuA3w48
```
```
STRIPE_SECRET_KEY=sk_test_51SQlePFl1uXcWbBhq5NQlFgnWfk3kGI3XmzgsNJzCOjLXI3G3xAHeeusRtI5SfW373OQQrVoYFUzZXxgmramNqf900Qt2SK3DW
```

#### **Email Service (Resend)**
```
RESEND_API_KEY=re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK
```

#### **Supabase Database**
```
SUPABASE_URL=https://thmujhifulhmwpefjxyd.supabase.co
```
```
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODIwNjgsImV4cCI6MjA3ODA1ODA2OH0.OoIbDIrAjcr9g0yNj5WQCwgxRtCrQiWMa7X09V9S44g
```
```
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ4MjA2OCwiZXhwIjoyMDc4MDU4MDY4fQ.kGHIJmEKwQkW8bLb7q2HW-2eU8iMVxYJq2UVjwMzTlE
```

#### **Server Configuration**
```
NODE_ENV=production
```
```
PORT=3000
```
```
CORS_ORIGIN=https://oumacavin.github.io
```
```
JWT_SECRET=kenya-safari-tours-jwt-secret-2025-production
```

#### **Business Information**
```
BUSINESS_NAME=Kenya Safari Tours
```
```
BUSINESS_EMAIL=cavin.otieno012@gmail.com
```
```
BUSINESS_PHONE=+254708101604
```
```
BUSINESS_ADDRESS=Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya
```

### 2.3 Save and Trigger Redeploy
- **Add variable** → **Save** → Add next variable
- After all variables are added, Railway will **automatically redeploy**
- This takes 2-3 minutes

---

## 🌐 **Step 3: Get Your Live Railway URL (2 minutes)**

### 3.1 Find Your Domain
1. In your Railway project, click **"Settings"** (left sidebar)
2. Click **"Domains"** tab
3. You'll see your live URL: `https://your-project-name.railway.app`

### 3.2 Test Health Endpoint
Visit: `https://your-project-name.railway.app/api/health`

**Expected Response:**
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

**✅ If you get this response, deployment is SUCCESS!**

---

## 📱 **Step 4: Update M-PESA Callback URLs (2 minutes)**

### 4.1 Copy Your Actual Railway URL
From the domains tab, copy your URL (example):
`https://kenya-safari-tours-production-12345.railway.app`

### 4.2 Update M-PESA Environment Variables
Go back to **Settings** → **Environment** and update:

1. **MPESA_CALLBACK_URL:**
   ```
   https://kenya-safari-tours-production-12345.railway.app/api/mpesa-callback
   ```

2. **MPESA_TIMEOUT_URL:**
   ```
   https://kenya-safari-tours-production-12345.railway.app/api/mpesa-timeout
   ```

### 4.3 Save and Redeploy
- Save both variables
- Railway will automatically redeploy
- **M-PESA will now work with real callbacks!**

---

## 🧪 **Step 5: Test Everything (3 minutes)**

### 5.1 Test Your Website
Visit: **https://oumacavin.github.io/tour/**

### 5.2 Test Contact Form
1. Go to: **https://oumacavin.github.io/tour/contact.html**
2. Fill out the form and submit
3. **✅ Check:** Your Supabase dashboard should show the new contact

### 5.3 Test Stripe Payment
1. Go to: **https://oumacavin.github.io/tour/payment.html**
2. Enter test card: `4242 4242 4242 4242`
3. Expiry: `12/34` | CVC: `123` | ZIP: `12345`
4. **✅ Expected:** Payment form should work

### 5.4 Test M-PESA Payment
1. Go to: **https://oumacavin.github.io/tour/payment.html**
2. Enter:
   - Phone: `0708101604`
   - Amount: `100`
3. **✅ Expected:** STK push to your phone
4. Enter PIN: `1234`
5. **✅ Expected:** Payment confirmation

---

## ✅ **Step 6: Success Checklist**

- [ ] Railway project created ✅
- [ ] GitHub repo connected ✅
- [ ] All environment variables added (30+ variables) ✅
- [ ] Deployment successful ✅
- [ ] Health check responding ✅
- [ ] M-PESA callback URLs updated ✅
- [ ] Contact form working ✅
- [ ] Stripe test payments working ✅
- [ ] M-PESA test payments working ✅
- [ ] Email notifications working ✅

---

## 🎉 **Congratulations! Your Website is Now Live!**

### **Your Complete Setup:**

| Service | URL |
|---------|-----|
| **Frontend (GitHub Pages)** | https://oumacavin.github.io/tour/ |
| **Backend (Railway)** | `https://your-project-name.railway.app` |
| **Contact Form** | https://oumacavin.github.io/tour/contact.html |
| **Payment Page** | https://oumacavin.github.io/tour/payment.html |
| **Health Check** | `https://your-project-name.railway.app/api/health` |

### **What's Now Working:**
✅ **M-PESA Mobile Payments** - Full STK push integration  
✅ **Stripe Card Payments** - Test mode with real processing  
✅ **Contact Forms** - Database storage via Supabase  
✅ **Email Notifications** - Automated confirmations  
✅ **All Destinations** - Complete Kenya safari content  
✅ **Responsive Design** - Mobile, tablet, desktop  

### **Final Step: Gmail App Password (Optional)**
For Gmail notifications, generate an app password:
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Generate app password for "Mail"
3. Update `SMTP_PASS` environment variable in Railway

---

## 🔧 **Troubleshooting**

### **Common Issues & Solutions:**

#### **1. Deployment Failed**
- **Check:** Railway build logs for error details
- **Fix:** Ensure all environment variables are added
- **Wait:** Sometimes takes 3-5 minutes to deploy

#### **2. M-PESA Not Working**
- **Check:** Callback URLs are updated with actual Railway URL
- **Fix:** Update MPESA_CALLBACK_URL and MPESA_TIMEOUT_URL
- **Test:** Use phone `0708101604` for M-PESA sandbox

#### **3. Contact Form Not Working**
- **Check:** Supabase variables are correct
- **Fix:** Verify SUPABASE_URL and SUPABASE_ANON_KEY
- **Test:** Check Supabase dashboard for new entries

#### **4. Stripe Test Card Declined**
- **Check:** Using exact test card `4242 4242 4242 4242`
- **Fix:** Use test data: expiry `12/34`, CVC `123`
- **Note:** Test mode doesn't charge real money

#### **5. Health Check Returns Error**
- **Check:** All critical environment variables present
- **Fix:** Add missing variables and redeploy
- **Test:** Wait 2-3 minutes after adding variables

---

## 📞 **Need Help?**

### **If something doesn't work:**
1. **Check the Railway logs** for specific error messages
2. **Verify all environment variables** are correctly set
3. **Test the health endpoint** first
4. **Check Supabase dashboard** for database connectivity

### **Your Support Resources:**
- **Email:** cavin.otieno012@gmail.com
- **Phone:** +254708101604
- **WhatsApp:** +254708101604
- **GitHub Issues:** https://github.com/OumaCavin/tour/issues

---

## 🎯 **Your Kenya Safari Tours Website is Now Production-Ready!**

**🌍 Visit your live site:** https://oumacavin.github.io/tour/  
**💳 Accept payments:** M-PESA (Kenya) + Stripe (International)  
**📧 Contact forms:** Working with database storage  
**📱 Mobile-friendly:** Perfect on all devices  

**Start taking bookings for your Kenya safari adventures! 🦁🌍**