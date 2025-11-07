# ✅ Railway Quick Setup Checklist

## Immediate Actions (15 minutes)

- [ ] 1. **Sign up at [railway.app](https://railway.app)** using GitHub
- [ ] 2. **Click "New Project"** → **"Deploy from GitHub repo"**
- [ ] 3. **Select repository:** `OumaCavin/tour`
- [ ] 4. **Wait for auto-deployment** (2-5 minutes)
- [ ] 5. **Copy your Railway URL** from Settings → Domains
- [ ] 6. **Add basic environment variables:**
  - `NODE_ENV=production`
  - `PORT=3000`
  - `BASE_URL=https://your-railway-url.railway.app`
- [ ] 7. **Test API endpoint:** Visit `https://your-railway-url.railway.app/api/health`

## Get Your Railway Credentials

**Your Railway URL will be something like:**
```
https://safari-tours-backend-abc123.railway.app
```

**Your API Base URL will be:**
```
https://safari-tours-backend-abc123.railway.app/api
```

## Update Frontend (After Getting Railway URL)

Replace in `js/main.js`:
```javascript
// OLD (localhost)
const API_BASE = 'http://localhost:3000/api';

// NEW (Railway)
const API_BASE = 'https://your-railway-url.railway.app/api';
```

Replace in `payment.html`:
```javascript
// OLD
const stripe = Stripe('pk_test_...');

// NEW  
const stripe = Stripe(window.API_CONFIG.STRIPE_PUBLISHABLE_KEY);
```

## Next: Get Payment API Keys

After Railway is live, proceed to get:
1. **Stripe Production Keys** (1-2 hours)
2. **Resend API Key** (30 minutes)
3. **M-PESA Credentials** (5-10 business days)

## Support
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Check deployment logs if issues occur
- Test with `curl https://your-railway-url.railway.app/api/health`