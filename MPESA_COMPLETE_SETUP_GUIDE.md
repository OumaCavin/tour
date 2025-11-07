# 📱 M-PESA Complete Setup Guide for Kenya Safari Tours

**✅ You're absolutely right!** These M-PESA variables are essential for proper integration. Here's the complete setup:

## 🎯 **M-PESA Configuration Variables (Essential)**

### **Add to Railway → Settings → Environment Variables:**

```bash
# M-PESA API Credentials (Your Actual Keys)
MPESA_CONSUMER_KEY=QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
MPESA_CONSUMER_SECRET=wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
MPESA_BUSINESS_SHORT_CODE=174379
MPESA_PASS_KEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919

# M-PESA API Endpoints (Fixed by Safaricom)
MPESA_AUTH_URL=https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
MPESA_ONLINEPAYMENT_URL=https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest
MPESA_ENV=sandbox

# Business Configuration
MPESA_BUSINESS_SHORTCODE=174379
MPESA_PARTY_B=174379

# ⚠️ UPDATE AFTER RAILWAY DEPLOYMENT:
MPESA_CALLBACK_URL=https://your-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL=https://your-project-name.railway.app/api/mpesa-timeout
```

---

## 🔄 **M-PESA Payment Flow**

### **1. User Initiates Payment**
```
Frontend (GitHub Pages) → Railway Backend → Safaricom M-PESA API
```

### **2. Payment Process**
1. **User enters phone number** (e.g., 0708101604)
2. **Frontend calls Railway backend** → `/api/mpesa-payment`
3. **Railway backend gets OAuth token** from Safaricom
4. **Railway backend initiates STK push** to user's phone
5. **User enters M-PESA PIN** on their phone
6. **Safaricom sends callback** to Railway backend
7. **Railway backend processes response** and updates database

### **3. Callback Handling**
Railway backend will handle these endpoints:
- `POST /api/mpesa-callback` - Success/failure response
- `POST /api/mpesa-timeout` - Timeout response

---

## 🧪 **M-PESA Testing (Sandbox Mode)**

### **Test Phone Numbers:**
- `0708101604` (Your test number)
- `0712345678` (General test)
- `0798765432` (General test)

### **Test Steps:**
1. Go to: https://oumacavin.github.io/tour/payment.html
2. Select **M-PESA** payment method
3. Enter phone: `0708101604`
4. Enter amount: Any amount (e.g., 100)
5. Click **"Initiate M-PESA Payment"**
6. Check phone for STK push prompt
7. Enter M-PESA PIN: `1234` (sandbox default)

---

## 📋 **Complete Railway Environment Variables (Copy-Paste Ready)**

```bash
# ============================================================================
# SERVER CONFIGURATION
# ============================================================================
NODE_ENV=production
PORT=3000

# ============================================================================
# STRIPE PAYMENT PROCESSING (TEST MODE)
# ============================================================================
STRIPE_PUBLISHABLE_KEY=pk_test_51SQlePFl1uXcWbBh3uPz4Nd51YZqQxVX6u5et2rDj1U4N4MQiPiqgSLp4GvVvEwI0gvQR5GfAOrF6ZGfElrRw3DA00CPuA3w48
STRIPE_SECRET_KEY=sk_test_51SQlePFl1uXcWbBhq5NQlFgnWfk3kGI3XmzgsNJzCOjLXI3G3xAHeeusRtI5SfW373OQQrVoYFUzZXxgmramNqf900Qt2SK3DW

# ============================================================================
# RESEND EMAIL SERVICE (FREE TIER)
# ============================================================================
RESEND_API_KEY=re_FK6iEydb_J4gw5Jkn5sKcn8s19LbSN9VK

# ============================================================================
# SUPABASE DATABASE
# ============================================================================
SUPABASE_URL=https://thmujhifulhmwpefjxyd.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODIwNjgsImV4cCI6MjA3ODA1ODA2OH0.OoIbDIrAjcr9g0yNj5WQCwgxRtCrQiWMa7X09V9S44g
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ4MjA2OCwiZXhwIjoyMDc4MDU4MDY4fQ.kGHIJmEKwQkW8bLb7q2HW-2eU8iMVxYJq2UVjwMzTlE

# ============================================================================
# M-PESA MOBILE PAYMENTS (COMPLETE CONFIGURATION)
# ============================================================================
MPESA_CONSUMER_KEY=QkPVoj0rqNjCfm9REtdBjL18yYjPsUgCgmQddGGdABSgoojd
MPESA_CONSUMER_SECRET=wAONrwQEH6OhFHyhaEqX4dNq2zHZDMT6WBSYU61h6vl9o49DMG6JwzyX1gIxitxO
MPESA_BUSINESS_SHORT_CODE=174379
MPESA_PASS_KEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
MPESA_AUTH_URL=https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
MPESA_ONLINEPAYMENT_URL=https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest
MPESA_ENV=sandbox
MPESA_BUSINESS_SHORTCODE=174379
MPESA_PARTY_B=174379
MPESA_CALLBACK_URL=https://your-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL=https://your-project-name.railway.app/api/mpesa-timeout

# ============================================================================
# SECURITY & CORS
# ============================================================================
JWT_SECRET=kenya-safari-tours-jwt-secret-2025-production
CORS_ORIGIN=https://oumacavin.github.io

# ============================================================================
# SMTP EMAIL ALTERNATIVE (GMAIL)
# ============================================================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=cavin.otieno012@gmail.com
SMTP_PASS=your_gmail_app_password_here
FROM_EMAIL=cavin.otieno012@gmail.com
FROM_NAME=Kenya Safari Tours

# ============================================================================
# BUSINESS INFORMATION
# ============================================================================
BUSINESS_NAME=Kenya Safari Tours
BUSINESS_EMAIL=cavin.otieno012@gmail.com
BUSINESS_PHONE=+254708101604
BUSINESS_ADDRESS=Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya

# ============================================================================
# PAYMENT CONFIGURATION
# ============================================================================
CURRENCY_KES=kes
CURRENCY_USD=usd
CURRENCY_EUR=eur
```

---

## 🚀 **Deployment Order**

### **1. Railway Deployment (First)**
1. Add all environment variables above
2. Deploy to Railway
3. Get your actual Railway URL

### **2. Update M-PESA URLs (Critical!)**
After deployment, immediately update:
```
MPESA_CALLBACK_URL=https://your-actual-project-name.railway.app/api/mpesa-callback
MPESA_TIMEOUT_URL=https://your-actual-project-name.railway.app/api/mpesa-timeout
```

### **3. Test M-PESA Flow**
1. Go to payment page
2. Select M-PESA
3. Use test phone: 0708101604
4. Enter any amount
5. Check for STK push on phone

---

## ✅ **Success Checklist**

- [ ] All M-PESA environment variables added to Railway
- [ ] Railway deployment successful
- [ ] Gmail app password configured
- [ ] M-PESA callback URLs updated with actual Railway URL
- [ ] Test M-PESA payment working
- [ ] Email confirmations sent
- [ ] Database records created

**🎉 Your M-PESA integration will be complete and ready for real payments!**