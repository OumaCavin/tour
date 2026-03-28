# 🧪 Email Testing Guide for Kenya Safari Tours

## 📧 **Test Your Resend Email Setup**

Once you've deployed to Railway and added your Resend API key, test the email functionality:

### **Test 1: Direct API Test**
```bash
curl -X POST https://your-railway-url.railway.app/api/test-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "cavin.otieno012@gmail.com",
    "subject": "Test Email - Kenya Safari Tours",
    "html": "<h1>✅ Email Test Successful!</h1><p>Your Resend integration is working perfectly.</p><p>Sent from your Kenya Safari Tours website.</p>"
  }'
```

### **Test 2: Contact Form Test**
1. **Visit your website**: [https://oumacavin.github.io/tour/](https://oumacavin.github.io/tour/)
2. **Go to Contact page**
3. **Fill out the contact form**:
   - Name: Test User
   - Email: cavin.otieno012@gmail.com
   - Message: "Testing email functionality"
4. **Submit the form**
5. **Check your email** for confirmation

### **Test 3: JavaScript Console Test**
Open browser developer tools (F12) and run:
```javascript
// Test email configuration
console.log('Email config:', window.API_CONFIG.EMAIL);

// Expected output:
{
  ENABLED: true,
  PROVIDER: 'resend',
  FROM_NAME: 'Kenya Safari Tours',
  FROM_EMAIL: 'onboarding@resend.dev',
  REPLY_TO: 'cavin.otieno012@gmail.com',
  FREE_TIER: true
}
```

---

## 🔍 **Email Troubleshooting**

### **Email Not Sending? Check These:**

1. **API Key Valid?**
   ```bash
   # Test in Railway logs
   # Should show: "Email sent successfully"
   ```

2. **Environment Variable Set?**
   - Railway Dashboard → Variables
   - Check: `RESEND_API_KEY=re_...` (not empty)

3. **Free Tier Limit Reached?**
   - Resend Dashboard → Usage
   - Should show: "X of 3,000 emails used this month"

4. **Email Delivered?**
   - Check spam/junk folder
   - Verify email address is correct
   - Check Resend dashboard for delivery status

### **Common Error Messages**

| Error | Solution |
|-------|----------|
| `Invalid API key` | Check RESEND_API_KEY in Railway variables |
| `Rate limit exceeded` | Wait, free tier has limits |
| `Email address invalid` | Use real email format |
| `Domain not verified` | Skip for free tier, use default sender |

---

## 📊 **Email Features Working**

### **✅ Contact Form Integration**
- Auto-send confirmation to customer
- Auto-send inquiry notification to business
- Professional email templates
- No manual email sending needed

### **✅ Booking Confirmation (when implemented)**
- Automatic booking confirmations
- Payment receipt emails
- Travel itinerary emails
- Reminder emails before travel

### **✅ Professional Appearance**
- Consistent branding across emails
- Professional sender name
- Mobile-responsive email templates
- Easy to read formatting

---

## 🚀 **Expected Results**

### **Customer Experience**
1. **Contact Form**: Instant confirmation email
2. **Booking Process**: Professional confirmations
3. **Communication**: Clear, branded emails
4. **Follow-up**: Automated email sequences

### **Business Benefits**
- **Saves time**: No manual email responses
- **Professional image**: Branded communications  
- **Customer service**: Instant confirmations
- **Lead management**: Organized inquiry system

---

## 📈 **Monitoring Your Email Usage**

### **Resend Dashboard**
- **Usage**: Track emails sent this month
- **Deliveries**: Success rate monitoring
- **Domains**: (Not needed for free tier)
- **API Keys**: Manage access

### **Railway Logs**
```bash
# Check email sending in Railway logs
# Look for patterns like:
"Email sent successfully to customer@email.com"
"Booking confirmation sent"
"Contact form inquiry received"
```

---

## 💡 **Pro Tips for Email Success**

1. **Use Clear Subject Lines**
   - ✅ "Booking Confirmed - Kenya Safari Adventure"
   - ❌ "Your safari booking"

2. **Professional Sender**
   - Free tier: "Kenya Safari Tours <onboarding@resend.dev>"
   - Business tier: "contact@kenyasafaritours.com"

3. **Test Before Launch**
   - Test with different email providers
   - Check mobile email appearance
   - Verify all links work

4. **Monitor Delivery**
   - Check Resend dashboard daily
   - Watch for delivery failures
   - Adjust content if needed

---

## 📞 **Email Setup Success Indicators**

**✅ Everything Working When You See:**
- Contact form submissions get instant confirmations
- Business email (cavin.otieno012@gmail.com) receives inquiries
- Emails appear professional and branded
- No error messages in Railway logs
- Resend dashboard shows successful deliveries

**🎉 Your Kenya Safari Tours website now has professional email functionality!**