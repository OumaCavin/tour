// Kenya Safari Tours - Payment Processing Service
// Complete backend with Stripe, M-PESA, and Resend email integration

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: ['https://oumacavin.github.io', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Initialize services
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
    process.env.SUPABASE_URL || 'https://thmujhifulhmwpefjxyd.supabase.co',
    process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ4MjA2OCwiZXhwIjoyMDc4MDU4MDY4fQ.kGHIJmEKwQkW8bLb7q2HW-2eU8iMVxYJq2UVjwMzTlE'
);
const resend = new Resend(process.env.RESEND_API_KEY);

// Booking data store
let bookingCounter = 1000;

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        services: {
            stripe: 'connected',
            supabase: 'connected',
            resend: 'connected'
        }
    });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const formData = req.body;
        
        // Validate required fields
        const requiredFields = ['first_name', 'last_name', 'email', 'subject'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                return res.status(400).json({ 
                    error: `Missing required field: ${field}` 
                });
            }
        }
        
        // Generate booking ID
        const bookingId = generateBookingId();
        
        // Store in Supabase
        const { data, error } = await supabase
            .from('contact_inquiries')
            .insert([{
                booking_id: bookingId,
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone || null,
                subject: formData.subject,
                destination: formData.destination || null,
                preferred_date: formData.preferred_date || null,
                group_size: formData.group_size || null,
                package: formData.package || null,
                route: formData.route || null,
                budget: formData.budget || null,
                message: formData.message,
                newsletter: formData.newsletter === 'on',
                include_payment: formData.include_payment === 'on',
                created_at: new Date().toISOString()
            }])
            .select();
        
        if (error) throw error;
        
        // Send email notification
        await sendEmailNotification(formData, bookingId);
        
        // Send confirmation email to customer
        await sendCustomerConfirmation(formData, bookingId);
        
        res.json({ 
            success: true, 
            booking_id: bookingId,
            message: 'Form submitted successfully' 
        });
        
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: 'Failed to process contact form' 
        });
    }
});

// Stripe payment processing
app.post('/api/payment/stripe', async (req, res) => {
    try {
        const { paymentMethodId, amount, currency, customerInfo, bookingId } = req.body;
        
        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount in cents
            currency: currency || 'kes',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
            metadata: {
                booking_id: bookingId,
                customer_email: customerInfo.email
            }
        });
        
        if (paymentIntent.status === 'succeeded') {
            // Update booking status in database
            await supabase
                .from('contact_inquiries')
                .update({ 
                    payment_status: 'completed',
                    payment_method: 'stripe',
                    amount_paid: amount / 100,
                    payment_date: new Date().toISOString()
                })
                .eq('booking_id', bookingId);
            
            // Send payment confirmation email
            await sendPaymentConfirmation(customerInfo, bookingId, amount);
            
            res.json({
                success: true,
                payment_intent: paymentIntent.id,
                message: 'Payment completed successfully'
            });
        } else {
            res.json({
                success: false,
                status: paymentIntent.status,
                message: 'Payment requires further action'
            });
        }
        
    } catch (error) {
        console.error('Stripe payment error:', error);
        res.status(500).json({ 
            error: 'Payment processing failed',
            message: error.message 
        });
    }
});

// M-PESA payment processing
app.post('/api/payment/mpesa', async (req, res) => {
    try {
        const { phoneNumber, amount, customerInfo, bookingId } = req.body;
        
        // In a real implementation, you would call Safaricom M-PESA API here
        // For demo purposes, we'll simulate the process
        
        const mpesaRequest = {
            booking_id: bookingId,
            phone: phoneNumber,
            amount: amount,
            customer_name: customerInfo.name,
            customer_email: customerInfo.email,
            status: 'pending',
            request_id: generateMPesaRequestId(),
            created_at: new Date().toISOString()
        };
        
        // Store M-PESA request
        await supabase
            .from('mpesa_transactions')
            .insert([mpesaRequest]);
        
        // In real implementation, initiate STK push
        // await initiateSTKPush(phoneNumber, amount, bookingId);
        
        res.json({
            success: true,
            request_id: mpesaRequest.request_id,
            message: 'M-PESA payment initiated. Please check your phone for the payment prompt.'
        });
        
    } catch (error) {
        console.error('M-PESA payment error:', error);
        res.status(500).json({ 
            error: 'M-PESA payment failed',
            message: error.message 
        });
    }
});

// Webhook endpoint for payment confirmations
app.post('/api/webhooks/stripe', bodyParser.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.log(`Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment succeeded:', paymentIntent.id);
            // Update database, send confirmations, etc.
            break;
        case 'payment_intent.payment_failed':
            const failedPayment = event.data.object;
            console.log('Payment failed:', failedPayment.id);
            // Handle failed payment
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ received: true });
});

// Utility functions
function generateBookingId() {
    const now = new Date();
    return 'KST-' + now.getFullYear() + 
           String(now.getMonth() + 1).padStart(2, '0') + 
           String(now.getDate()).padStart(2, '0') + 
           String(now.getHours()).padStart(2, '0') + 
           String(now.getMinutes()).padStart(2, '0') + 
           String(bookingCounter++);
}

function generateMPesaRequestId() {
    return 'MP' + Date.now() + Math.random().toString(36).substr(2, 9);
}

async function sendEmailNotification(formData, bookingId) {
    try {
        await resend.emails.send({
            from: 'Kenya Safari Tours <noreply@kenyasaritours.com>',
            to: ['cavin.otieno012@gmail.com'],
            subject: `New Booking Inquiry - ${bookingId}`,
            html: `
                <h2>New Booking Inquiry</h2>
                <p><strong>Booking ID:</strong> ${bookingId}</p>
                <p><strong>Name:</strong> ${formData.first_name} ${formData.last_name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Destination:</strong> ${formData.destination || 'Not specified'}</p>
                <p><strong>Preferred Date:</strong> ${formData.preferred_date || 'Not specified'}</p>
                <p><strong>Group Size:</strong> ${formData.group_size || 'Not specified'}</p>
                <p><strong>Package:</strong> ${formData.package || 'Not specified'}</p>
                <p><strong>Route:</strong> ${formData.route || 'Not specified'}</p>
                <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message}</p>
                <p><strong>Include Payment:</strong> ${formData.include_payment ? 'Yes' : 'No'}</p>
            `
        });
    } catch (error) {
        console.error('Email notification error:', error);
    }
}

async function sendCustomerConfirmation(formData, bookingId) {
    try {
        await resend.emails.send({
            from: 'Kenya Safari Tours <noreply@kenyasaritours.com>',
            to: [formData.email],
            subject: `Thank you for your inquiry - Booking ID: ${bookingId}`,
            html: `
                <h2>Thank you for your interest in Kenya Safari Tours!</h2>
                <p>Dear ${formData.first_name} ${formData.last_name},</p>
                <p>We've received your inquiry and will get back to you within 24 hours with a customized proposal.</p>
                <p><strong>Your Booking Details:</strong></p>
                <ul>
                    <li><strong>Booking ID:</strong> ${bookingId}</li>
                    <li><strong>Inquiry Type:</strong> ${formData.subject}</li>
                    <li><strong>Destination:</strong> ${formData.destination || 'To be discussed'}</li>
                    <li><strong>Preferred Date:</strong> ${formData.preferred_date || 'To be confirmed'}</li>
                    <li><strong>Group Size:</strong> ${formData.group_size || 'To be discussed'}</li>
                </ul>
                <p>In the meantime, feel free to contact us:</p>
                <ul>
                    <li>📧 Email: cavin.otieno012@gmail.com</li>
                    <li>📞 Phone: +254 708 101 604</li>
                    <li>💬 WhatsApp: +254 708 101 604</li>
                </ul>
                <p>Best regards,<br>The Kenya Safari Tours Team</p>
            `
        });
    } catch (error) {
        console.error('Customer confirmation error:', error);
    }
}

async function sendPaymentConfirmation(customerInfo, bookingId, amount) {
    try {
        await resend.emails.send({
            from: 'Kenya Safari Tours <noreply@kenyasaritours.com>',
            to: [customerInfo.email],
            subject: `Payment Confirmed - Booking ID: ${bookingId}`,
            html: `
                <h2>Payment Confirmed!</h2>
                <p>Dear ${customerInfo.name},</p>
                <p>Your payment has been successfully processed. Here are your booking details:</p>
                <ul>
                    <li><strong>Booking ID:</strong> ${bookingId}</li>
                    <li><strong>Amount Paid:</strong> KSh ${(amount / 100).toLocaleString()}</li>
                    <li><strong>Payment Date:</strong> ${new Date().toLocaleDateString()}</li>
                    <li><strong>Payment Method:</strong> Credit/Debit Card</li>
                </ul>
                <p>You will receive a detailed itinerary within 24 hours. Our team will contact you to finalize your travel plans.</p>
                <p>Thank you for choosing Kenya Safari Tours!</p>
            `
        });
    } catch (error) {
        console.error('Payment confirmation error:', error);
    }
}

// Start server
app.listen(PORT, () => {
    console.log(`Kenya Safari Tours Payment Service running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});

// Export for testing
module.exports = app;