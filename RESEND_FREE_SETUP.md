# 📧 Resend Setup for Free/Non-Commercial Use

## 🆓 **Resend Free Tier (Perfect for Non-Commercial)**

### **Free Tier Limits:**
- ✅ **3,000 emails per month** (FREE)
- ✅ **No credit card required** to start
- ✅ **No business verification** needed
- ✅ **Perfect for contact forms** and booking confirmations
- ✅ **Easy upgrade** when you need more

### **What You Can Do for Free:**
- Contact form submissions
- Booking confirmation emails
- Welcome emails for new users
- Newsletter signups (if added later)
- Password reset emails
- Test emails for development

---

## 🚀 **Quick Setup (5 Minutes - No Business Required)**

### **Step 1: Create Free Account**
1. **Visit**: [https://resend.com](https://resend.com)
2. **Click**: "Sign up" (top right)
3. **Use email**: cavin.otieno012@gmail.com
4. **Verify email**: Check your inbox
5. **You're done!** No business details needed

### **Step 2: Get Your API Key (2 minutes)**
1. **Go to**: Dashboard → API Keys
2. **Click**: "Create API Key"
3. **Name**: "Safari Tours Free Account"
4. **Permissions**: "Sending access"
5. **Copy**: `re_...` (your API key)
6. **Save**: Keep this secure for Railway deployment

### **Step 3: Add to Railway (3 minutes)**
In Railway dashboard → Variables:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

---

## 💡 **For Free App Use - No Domain Required**

### **Use Resend's Default Sending**
```javascript
// No domain setup needed for free tier
const emailData = {
  from: 'Kenya Safari Tours <onboarding@resend.dev>', // Resend's default sender
  to: 'customer@email.com',
  subject: 'Safari Booking Confirmation',
  html: emailTemplate
};
```

### **No DNS Configuration Needed**
- ✅ **Skip domain setup** for free tier
- ✅ **Use default sender** (onboarding@resend.dev)
- ✅ **Send emails immediately**
- ✅ **All features work** the same

---

## 🔧 **Configuration for Free Use**

### **Environment Variables (Railway)**
```bash
# Free tier configuration
NODE_ENV=production
PORT=3000
BASE_URL=https://your-railway-url.railway.app
RESEND_API_KEY=re_your_actual_api_key
PAYMENT_MODE=test

# No domain variables needed for free tier
# RESEND_DOMAIN=kenyasafaritours.com  # Only needed for business tier
```

### **JavaScript Configuration**
```javascript
// js/config.js for free tier
window.API_CONFIG = {
  // Resend setup (free tier)
  RESEND_ENABLED: true,
  RESEND_FROM_EMAIL: 'Kenya Safari Tours <onboarding@resend.dev>',
  RESEND_API_KEY: 're_your_api_key', // Add to Railway env vars
  
  // Email templates will use default sender
  BUSINESS: {
    NAME: 'Kenya Safari Tours',
    EMAIL: 'cavin.otieno012@gmail.com',
    SENDER_EMAIL: 'onboarding@resend.dev' // Free tier sender
  }
};
```

---

## 📧 **Email Templates for Free Tier**

### **Contact Form Confirmation**
```html
<h2>Thank you for contacting Kenya Safari Tours!</h2>
<p>Dear {{customer_name}},</p>
<p>Thank you for your inquiry about our safari tours. We have received your message and will get back to you within 24 hours.</p>
<p><strong>Your inquiry details:</strong></p>
<ul>
  <li>Email: {{email}}</li>
  <li>Phone: {{phone}}</li>
  <li>Preferred dates: {{travel_date}}</li>
  <li>Package interest: {{package}}</li>
</ul>
<p>Our safari expert, Cavin Otieno, will contact you soon to discuss your perfect Kenya adventure.</p>
<p>Best regards,<br>Kenya Safari Tours Team</p>
```

### **Booking Confirmation**
```html
<h2>Booking Confirmation - Kenya Safari Tours</h2>
<p>Dear {{customer_name}},</p>
<p>Your safari booking has been confirmed!</p>
<p><strong>Booking Details:</strong></p>
<ul>
  <li>Booking ID: {{booking_id}}</li>
  <li>Package: {{package_name}}</li>
  <li>Travel Date: {{travel_date}}</li>
  <li>Guests: {{guest_count}}</li>
  <li>Total Amount: {{amount}}</li>
</ul>
<p>We'll send you a detailed itinerary and next steps soon.</p>
<p>Get ready for an amazing Kenya safari adventure!</p>
```

---

## ⚡ **When to Upgrade (Optional)**

### **Business Tier Benefits:**
- **Custom domain**: your@kenyasafaritours.com
- **Higher limits**: More than 3,000 emails/month
- **Advanced features**: Analytics, templates, etc.
- **Professional branding**: Your own sender name
- **Support**: Priority customer support

### **Upgrade Triggers:**
- >3,000 emails per month
- Need custom sender domain
- Want detailed analytics
- Require priority support
- Adding newsletter features

---

## 🧪 **Testing Your Email Setup**

### **Test Email Endpoint**
```bash
# Test email functionality
curl -X POST https://your-railway-url.railway.app/api/test-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "cavin.otieno012@gmail.com",
    "subject": "Test Email - Safari Tours",
    "html": "<h1>Test successful!</h1><p>Your email system is working.</p>"
  }'
```

### **Expected Response**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "resend_123456789"
}
```

---

## 📊 **Free vs Business Comparison**

| Feature | Free Tier | Business Tier |
|---------|-----------|---------------|
| Monthly emails | 3,000 | Unlimited* |
| Custom domain | ❌ | ✅ |
| DNS setup | ❌ | ✅ Required |
| Business verification | ❌ | ✅ Required |
| Analytics | Basic | Advanced |
| Support | Community | Priority |
| Cost | FREE | $20/month+ |

*Based on plan

---

## 🎯 **Quick Action Plan for Free Resend Setup**

### **Timeline: 5 Minutes Total**
1. **Sign up** at resend.com (2 min)
2. **Create API key** (1 min)  
3. **Add to Railway** (1 min)
4. **Test email** (1 min)

### **What You Get**
- ✅ Professional email confirmations
- ✅ Contact form processing
- ✅ Booking confirmations
- ✅ No business verification
- ✅ No credit card required
- ✅ Easy upgrade path later

---

## 🚀 **Integration with Your Safari Tours Site**

### **Contact Form Integration**
```javascript
// In server.js - Contact form processing
const { data } = await resend.emails.send({
  from: 'Kenya Safari Tours <onboarding@resend.dev>',
  to: formData.email,
  subject: 'Thank you for contacting Kenya Safari Tours',
  html: contactConfirmationTemplate(formData)
});

// Also send to business email
await resend.emails.send({
  from: 'Website Contact <onboarding@resend.dev>',
  to: 'cavin.otieno012@gmail.com',
  subject: `New Safari Inquiry from ${formData.name}`,
  html: inquiryNotificationTemplate(formData)
});
```

### **Payment Confirmation**
```javascript
// After successful payment
const { data } = await resend.emails.send({
  from: 'Kenya Safari Tours <onboarding@resend.dev>',
  to: customerEmail,
  subject: 'Booking Confirmed - Your Kenya Safari Adventure',
  html: bookingConfirmationTemplate(bookingDetails)
});
```

---

## 💡 **Perfect for Your Use Case**

**Kenya Safari Tours Benefits:**
- ✅ **Free tier covers** typical contact form volume
- ✅ **Professional appearance** for customer communications
- ✅ **Automated confirmations** reduce manual work
- ✅ **No business costs** for non-commercial operation
- ✅ **Easy scaling** when ready to monetize

**Your customers get:**
- ✅ Instant confirmation emails
- ✅ Professional communication
- ✅ Clear booking details
- ✅ Contact information for follow-up

---

## 📞 **Summary**

**Resend is ideal for your non-commercial Kenya Safari Tours website!**

- **Setup**: 5 minutes
- **Cost**: FREE
- **Limits**: 3,000 emails/month
- **Requirements**: Just email verification
- **Business verification**: NOT needed

**Ready to start immediately!** No domain setup, no DNS configuration, no business verification required.