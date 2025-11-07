# Kenya Safari Tours

A premium, responsive travel website for Kenya safari experiences, designed and developed by Cavin Otieno.

## 🌐 Live Demo

**Website URL**: [https://oumacavin.github.io/tour/](https://oumacavin.github.io/tour/)

Visit the live website to explore all features and destinations!

## ✨ Features

### 🎨 Design & Branding
- **Kenya-Themed Design**: Beautiful earth-tone color scheme inspired by Kenya's landscapes
  - Primary Color: #2C5F2D (Safari Green)
  - Secondary Color: #D4AF37 (Golden Accent)
  - Accent Color: #8B4513 (Earth Brown)
- **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Professional Aesthetics**: Modern, elegant design with smooth animations using AOS
- **Kenya Branding**: All content customized for Kenya with local destinations, currency (KES), and contact information
- **Custom Kenya Images**: High-quality images of Kenyan destinations, wildlife, and landscapes

### 🦁 Safari & Travel Features
- **Complete Destination Pages**: Individual pages for major Kenya destinations
  - **Masai Mara**: World-famous for the Great Migration and Big Five
  - **Amboseli**: Home to Africa's largest elephants with Kilimanjaro views
  - **Mount Kenya**: Africa's second-highest peak for mountain trekking
  - **Lamu Island**: UNESCO World Heritage site with Swahili culture
  - **Tsavo National Park**: Kenya's largest park famous for red elephants
  - **Additional Destinations**: Lake Nakuru, Lake Naivasha, Samburu, Aberdare
- **Safari Packages**: Various packages from budget to luxury with detailed pricing
- **Wildlife Information**: Comprehensive information about Kenya's wildlife and attractions
- **Best Time to Visit**: Seasonal information for optimal travel planning
- **Cultural Experiences**: Information about Maasai culture and Swahili heritage
- **Adventure Activities**: Mountain climbing, beach activities, cultural tours

### 💳 Payment Integration
- **M-PESA Mobile Payments**: Safaricom STK push integration for Kenya customers
  - Supports mobile money payments via phone
  - Sandbox environment for testing
  - Automatic payment confirmations
- **Stripe Card Payments**: International card payments in test mode
  - Supports all major credit cards
  - Secure payment processing
  - Real-time payment confirmation
- **Multiple Payment Options**: 
  - KES (Kenyan Shillings) via M-PESA
  - USD/EUR via Stripe
  - Secure webhooks for payment confirmations

### 📞 Contact & Communication
- **Integrated Contact Forms**: Supabase-powered contact forms with real-time data storage
- **WhatsApp Integration**: Direct WhatsApp contact buttons with wa.me links
- **Multiple Contact Methods**: 
  - Email: cavin.otieno012@gmail.com
  - Phone: +254708101604
  - WhatsApp: +254708101604
  - Contact forms with Supabase backend
- **Location**: Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya
- **Responsive Support**: 24/7 customer support information

### 🏗️ Technical Features
- **Bootstrap 5**: Modern, mobile-first framework for responsive design
- **AOS Animations**: Smooth scroll animations for better user experience
- **Font Awesome**: Professional icon library throughout the site
- **SEO Optimized**: Comprehensive meta tags, descriptions, and structured data
- **Performance Optimized**: Optimized images, minified CSS/JS, and fast loading
- **Cross-Browser Compatible**: Works on all modern browsers
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Accessibility**: WCAG compliant with proper alt tags and semantic HTML

## 📄 Pages Structure

### Main Pages
1. **Homepage** (`index.html`) - Hero section, services, popular destinations, testimonials, special offers
2. **About** (`about.html`) - Company story, team member profiles, values, certifications, why choose us
3. **Services** (`services.html`) - Detailed service offerings, accommodations, transport, custom tours
4. **Contact** (`contact.html`) - Contact forms, information, map, frequently asked questions
5. **All Destinations** (`destinations.html`) - Complete destination overview with filtering and search

### Individual Destination Pages
6. **Masai Mara** (`masai-mara.html`) - Great Migration, Big Five, detailed safari information
7. **Amboseli** (`amboseli.html`) - Elephant herds, Mount Kilimanjaro views, park attractions
8. **Mount Kenya** (`mount-kenya.html`) - Mountain climbing, trekking routes, expedition details
9. **Lamu Island** (`lamu.html`) - UNESCO site, Swahili culture, pristine beaches
10. **Tsavo** (`tsavo.html`) - Red elephants, largest park, diverse landscapes

### Key Features by Page
- **Interactive Booking Forms**: Supabase-integrated forms on destination pages
- **Image Galleries**: High-quality destination and wildlife photography
- **Pricing Tables**: Transparent pricing with package comparisons
- **Activity Sections**: Detailed activity descriptions and options
- **Accommodation Information**: Various lodging options with features and pricing
- **Wildlife Spotting**: Comprehensive wildlife and attraction information
- **Cultural Experiences**: Local culture and heritage integration

## Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icon library
- **AOS**: Scroll animations

### Backend & Services
- **Node.js**: Express.js server for API endpoints
- **Supabase**: Backend database for contact forms and data storage
- **Railway**: Cloud platform for backend deployment
- **M-PESA API**: Safaricom mobile payment integration
- **Stripe API**: International payment processing (test mode)
- **Resend**: Email service for automated notifications

### Payment Processing
- **M-PESA STK Push**: Mobile money payments for Kenya
- **Stripe Elements**: Secure card payment forms
- **Webhook Integration**: Real-time payment confirmations
- **Environment Variables**: Secure credential management

## 🚀 Setup & Deployment

### Quick Start
1. **Clone the repository**:
   ```bash
   git clone https://github.com/OumaCavin/tour.git
   cd tour
   ```

2. **Local Development**:
   - Open `index.html` in a web browser
   - For development server: Use Live Server extension in VS Code or any local server

3. **Deploy to GitHub Pages** (Frontend):
   - Push to the main branch of the repository
   - Enable GitHub Pages in repository settings
   - Access at: `https://oumacavin.github.io/tour/`

4. **Deploy to Railway** (Backend):
   - See `RAILWAY_DEPLOYMENT_STEP_BY_STEP.md` for complete instructions
   - Required for M-PESA, Stripe, and contact form functionality
   - Time needed: 10-15 minutes

### Complete Deployment Guide

**🌐 Frontend (GitHub Pages):** https://oumacavin.github.io/tour/  
**🔧 Backend (Railway):** `https://your-project-name.railway.app`  
**📋 Full Guide:** [RAILWAY_DEPLOYMENT_STEP_BY_STEP.md](RAILWAY_DEPLOYMENT_STEP_BY_STEP.md)

### Supabase Database Setup

The contact forms require a Supabase backend. Your project is already configured:

1. **Your Supabase Project**:
   - Project URL: `https://thmujhifulhmwpefjxyd.supabase.co`
   - Database tables are ready in `supabase-setup.sql`
   - API keys are configured in environment variables

2. **Database Tables**:
   The required tables are created and ready:
   - `contact_submissions` - For contact form data
   - `newsletter_subscriptions` - For newsletter signups
   - `booking_inquiries` - For tour booking requests

3. **Environment Configuration**:
   Backend environment variables include all required Supabase credentials:
   ```bash
   SUPABASE_URL=https://thmujhifulhmwpefjxyd.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Railway Backend Deployment

#### **Required for Full Functionality:**
- **M-PESA Mobile Payments** (Kenya) - STK push integration
- **Stripe Card Payments** (International) - Test mode enabled
- **Email Notifications** - Automated confirmations via Resend
- **Contact Form Processing** - Database storage via Supabase
- **Payment Webhooks** - Real-time payment confirmations

#### **Quick Setup (15 minutes):**
1. **Create Railway project** from GitHub repository
2. **Add environment variables** from `RAILWAY_COMPLETE_ENVIRONMENT_VARIABLES.txt`
3. **Get Railway URL** and update M-PESA callback URLs
4. **Test all functionality** - contact forms, payments, email notifications

#### **Test Your Deployment:**
- **Health Check:** `https://your-project-name.railway.app/api/health`
- **Contact Form:** https://oumacavin.github.io/tour/contact.html
- **Stripe Payment:** https://oumacavin.github.io/tour/payment.html (use card: 4242 4242 4242 4242)
- **M-PESA Payment:** https://oumacavin.github.io/tour/payment.html (use phone: 0708101604)

### 🛠️ Customization Guide

#### Branding Updates
- **Logo**: Replace `images/kenya-logo.png` with your company logo
- **Color Scheme**: Modify CSS variables in `css/style.css`:
  ```css
  :root {
    --primary-color: #2C5F2D;    /* Your primary brand color */
    --secondary-color: #D4AF37;  /* Your secondary color */
    --accent-color: #8B4513;     /* Your accent color */
  }
  ```
- **Contact Information**: Update all pages with your contact details
- **Business Name**: Replace "Kenya Safari Tours" with your business name

#### Content Customization
- **Destinations**: Add or modify destination pages and information
- **Services**: Update service offerings in `services.html`
- **Pricing**: Modify package prices and inclusions
- **Team Photos**: Replace team member images in `about.html`
- **Testimonials**: Update customer testimonials and photos
- **Images**: Replace placeholder images with your own photography

#### Technical Customization
- **SEO**: Update meta tags, descriptions, and titles for better search visibility
- **Analytics**: Add Google Analytics or other tracking codes
- **Maps**: Integrate Google Maps for office location
- **Social Media**: Update social media links in footer sections
- **Performance**: Optimize images and implement lazy loading for better performance

### 📁 File Structure
```
kenya-tour-website/
├── Frontend Files
│   ├── index.html              # Homepage
│   ├── about.html              # About page
│   ├── services.html           # Services page
│   ├── contact.html            # Contact page
│   ├── destinations.html       # All destinations overview
│   ├── masai-mara.html         # Masai Mara destination
│   ├── amboseli.html           # Amboseli destination
│   ├── mount-kenya.html        # Mount Kenya destination
│   ├── lamu.html              # Lamu Island destination
│   ├── tsavo.html             # Tsavo destination
│   ├── payment.html           # Payment processing page
│   ├── confirmation.html      # Payment confirmation page
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript file
│   │   └── config.js          # API configuration
│   └── images/                 # All website images
│       ├── kenya-logo.png     # Company logo
│       ├── testimonials/      # Customer photos
│       ├── destinations/      # Destination images
│       └── team/              # Team member photos

├── Backend Files
│   ├── server.js              # Express.js server
│   ├── package.json           # Node.js dependencies
│   ├── Dockerfile            # Docker containerization
│   ├── docker-compose.yml    # Docker orchestration

├── Database & Setup
│   ├── supabase-setup.sql    # Database setup script
│   └── database-setup.sql    # Complete database setup

├── Configuration & Documentation
│   ├── RAILWAY_DEPLOYMENT_STEP_BY_STEP.md  # Deployment guide
│   ├── RAILWAY_COMPLETE_ENVIRONMENT_VARIABLES.txt  # All env variables
│   ├── DEPLOYMENT_READY_SUMMARY.md        # Final deployment status
│   └── README.md                          # This documentation
```

### 🔧 Technical Requirements
- **Modern Browser**: Chrome, Firefox, Safari, Edge (latest versions)
- **Internet Connection**: Required for external libraries (Bootstrap, Font Awesome, AOS)
- **Supabase Account**: For contact form functionality
- **Web Server**: For deployment (GitHub Pages, Netlify, Vercel, etc.)

## 📧 Contact Information

- **Email**: cavin.otieno012@gmail.com
- **Phone**: +254708101604
- **WhatsApp**: +254708101604
- **Business Address**: Westlands Business Park, Ring Road, P.O. Box 12345-00100, Nairobi, Kenya
- **Business Hours**: Monday - Friday: 8:00 AM - 6:00 PM (EAT)
- **Emergency Contact**: 24/7 WhatsApp support available

### 🗺️ Office Location
**Westlands Business Park** is located in the heart of Nairobi's business district, easily accessible from:
- Jomo Kenyatta International Airport (45 minutes)
- Nairobi city center (20 minutes)
- Various luxury hotels in Westlands area

The office is situated on Ring Road, making it convenient for clients visiting for consultation and trip planning.

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this website template for your own safari and travel business.

## 👥 Credits

- **Original Template**: Based on themewagon/tour template
- **Kenya Rebranding & Development**: MiniMax Agent
- **Business Owner**: Cavin Otieno
- **Kenya Branding**: Complete customization for Kenya safari experiences
- **Photography**: High-quality Kenya travel and wildlife photography
- **Icons**: Font Awesome icon library
- **Framework**: Bootstrap 5 responsive framework
- **Animations**: AOS (Animate On Scroll) library

### Special Thanks
- **Kenya Tourism Board**: For inspiration and destination information
- **Kenya Wildlife Service**: For wildlife and park information
- **Local Communities**: For cultural insights and authentic experiences

---

## 🎉 Ready to Explore Kenya?

This website is now ready to help you showcase Kenya's incredible safari destinations and guide travelers to unforgettable African adventures.

**🌍 Visit the Live Site**: [https://oumacavin.github.io/tour/](https://oumacavin.github.io/tour/)

**Contact Cavin Otieno for your next Kenya adventure!**
- 📧 cavin.otieno012@gmail.com
- 📱 +254708101604
- 💬 WhatsApp: +254708101604

---

**Created with ❤️ for Kenya Safari Tours by Cavin Otieno**