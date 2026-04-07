# Kenya Safari Tours Website

![Kenya Safari Tours Banner](https://raw.githubusercontent.com/OumaCavin/tour/master/images/kenya-highlights.jpg)

<!-- Technology Badges -->
<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Last Commit](https://img.shields.io/badge/Last%20Commit-April%202026-orange?style=for-the-badge)
![Contributors](https://img.shields.io/badge/Contributors-1-blue?style=for-the-badge)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About The Project

Kenya Safari Tours is a comprehensive booking and information platform for experiencing the wonders of Kenyan wildlife and landscapes. From the vast plains of Masai Mara to the scenic shores of Lamu, we showcase the best of what Kenya has to offer as a premier safari destination.

This website provides potential visitors with detailed information about various safari destinations, tour packages, and booking capabilities. It features a modern, responsive design that works seamlessly across all devices, ensuring an excellent user experience whether browsing on desktop or mobile.

### Key Destinations Featured

- **Masai Mara National Reserve** - Home to the Great Migration
- **Amboseli National Park** - Iconic views of Mount Kilimanjaro
- **Mount Kenya** - Africa's second-highest peak
- **Tsavo National Parks** - East and West, the largest in Kenya
- **Lake Nakuru** - Famous for flamingos and rhinos
- **Lake Naivasha** - Scenic freshwater lake
- **Lamu Island** - UNESCO World Heritage Site

---

## Features

### Core Functionality

- **Responsive Design** - Mobile-first approach ensuring compatibility across all devices and screen sizes
- **Interactive Destination Pages** - Detailed information about each safari location with galleries
- **Booking Request System** - Form-based inquiry system for tour bookings
- **Contact Form** - Direct communication channel for customer inquiries
- **Payment Integration** - Support for multiple payment methods including Stripe, M-PESA, and bank transfers
- **Email Notifications** - Automated confirmation emails for bookings and inquiries

### User Experience

- **Modern Navigation** - Intuitive menu structure for easy content discovery
- **Image Galleries** - High-quality photography showcasing Kenya's wildlife and landscapes
- **Service Information** - Comprehensive details about tour packages and pricing
- **About Section** - Background information about the tour operators
- **Testimonials** - Customer reviews and feedback sections

### Technical Features

- **Progressive Web App Ready** - Optimized for modern web standards
- **SEO Optimized** - Meta tags and structured content for search engines
- **Performance Optimized** - Compressed images and efficient code
- **Cross-Browser Compatible** - Works on all major browsers
- **Accessibility Features** - ARIA labels and semantic HTML

---

## Technology Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | Latest | Page structure and content |
| CSS3 | Latest | Styling and responsive design |
| JavaScript | ES6+ | Interactive functionality |
| Google Fonts | Latest | Typography enhancement |

### Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18+ | Server runtime environment |
| Express.js | 4.x | Web application framework |
| Supabase | Latest | Database and authentication |
| Resend | Latest | Email delivery service |

### Payment Integrations

| Service | Type | Status |
|---------|------|--------|
| Stripe | Credit/Debit Cards | Active |
| M-PESA | Mobile Money (Kenya) | Active |
| Bank Transfer | Direct Deposit | Available |

### Development Tools

| Tool | Purpose |
|------|---------|
| Git | Version control |
| GitHub Pages | Static hosting |
| Docker | Containerization |
| Railway | Backend deployment |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 18 or higher)
- **npm** (Node Package Manager)
- **Git** (for version control)
- **Docker** (optional, for containerized development)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/OumaCavin/tour.git
   cd tour
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Copy the example environment file and configure your settings:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:

   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database (Supabase)
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key

   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key

   # Payment - Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret

   # Payment - M-PESA
   MPESA_CONSUMER_KEY=your_consumer_key
   MPESA_CONSUMER_SECRET=your_consumer_secret
   MPESA_SHORTCODE=your_shortcode
   MPESA_PASSKEY=your_passkey
   ```

4. **Start the Development Server**

   ```bash
   # For frontend only (static files)
   # Simply open index.html in a browser

   # For full backend functionality
   npm run dev
   ```

5. **Access the Website**

   - Frontend: `http://localhost:3000` or open `index.html` directly
   - API: `http://localhost:3000/api`

---

## Deployment

### GitHub Pages (Frontend Only)

The website is deployed to GitHub Pages for free static hosting:

**URL**: https://oumacavin.github.io/tour/

To deploy updates:

1. Push your changes to the `master` branch
2. GitHub Pages will automatically rebuild and deploy

**Note**: Backend features (forms, payments) require a separate backend deployment.

### Railway Deployment (Full Stack)

For production deployment with backend functionality:

1. Create a [Railway](https://railway.app) account
2. Connect your GitHub repository
3. Configure environment variables in Railway dashboard
4. Deploy

**Railway Environment Variables Required**:

```
PORT=3000
NODE_ENV=production
SUPABASE_URL
SUPABASE_KEY
RESEND_API_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
MPESA_CONSUMER_KEY
MPESA_CONSUMER_SECRET
MPESA_SHORTCODE
MPESA_PASSKEY
```

### Docker Deployment

For containerized deployment:

```bash
# Build the Docker image
docker build -t kenya-safari-tours .

# Run the container
docker run -p 3000:3000 \
  --env-file .env \
  kenya-safari-tours
```

Or use Docker Compose:

```bash
docker-compose up -d
```

---

## Project Structure

```
tour/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── destinations.html       # Destinations listing
├── contact.html            # Contact form
├── payment.html            # Payment page
├── confirmation.html       # Booking confirmation
├── nakuru.html             # Lake Nakuru destination
├── naivasha.html           # Lake Naivasha destination
├── amboseli.html           # Amboseli destination
├── masai-mara.html         # Masai Mara destination
├── mount-kenya.html        # Mount Kenya destination
├── tsavo.html              # Tsavo destination
├── lamu.html               # Lamu destination
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js             # Core JavaScript
│   └── config.js           # Configuration
├── images/                 # Website images
├── imgs/                   # Additional images
├── documents/              # Documentation and guides
│   ├── README.md
│   ├── DEPLOYMENT.md
│   ├── RAILWAY_*.md
│   └── MPESA_*.md
├── server.js               # Node.js server
├── package.json            # NPM dependencies
├── Dockerfile              # Docker configuration
├── docker-compose.yml       # Docker Compose configuration
├── .env.example            # Environment variables template
├── .nojekyll               # GitHub Pages configuration
├── .htaccess               # Apache configuration
├── 404.html                # Custom 404 page
└── README.md                # This file
```

---

## Configuration

### Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Get your URL and anon key from Settings > API
3. Create tables for bookings and inquiries
4. Configure Row Level Security (RLS) policies
5. Add credentials to your `.env` file

### Stripe Setup

1. Create an account at [stripe.com](https://stripe.com)
2. Get your API keys from Developers > API keys
3. Configure webhook endpoint for payment confirmations
4. Add credentials to your `.env` file

### M-PESA Setup (Kenya Only)

1. Create a Daraja API account at [safaricom.co.ke](https://www.safaricom.co.ke)
2. Get your Consumer Key and Consumer Secret
3. Configure your Shortcode and Passkey
4. Add credentials to your `.env` file

### Email Configuration

1. Create a [Resend](https://resend.com) account
2. Verify your domain or use their sandbox
3. Get your API key
4. Add to your `.env` file

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Test your changes locally before submitting
- Update documentation as needed
- Keep commit messages clear and descriptive

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

**Project Developer**: Cavin Otieno

- **GitHub**: [OumaCavin](https://github.com/OumaCavin)
- **Email**: [cavin.otieno012@gmail.com](mailto:cavin.otieno012@gmail.com)
- **Website**: [Kenya Safari Tours](https://oumacavin.github.io/tour/)

---

## Acknowledgments

- Safari images and content courtesy of Kenya Tourism Board
- Icons and badges provided by [Shields.io](https://shields.io)
- Hosting powered by [GitHub Pages](https://pages.github.com)
- Backend deployment powered by [Railway](https://railway.app)

---

<div align="center">

**Made with passion for Kenya's wildlife and natural beauty**

*Experience the wonder of Africa*

</div>
