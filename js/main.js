// Kenya Safari Tours - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize Bootstrap Datepickers
    initializeDatepickers();

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Destination selector functionality
    const destinationSelect = document.querySelector('.form-select');
    const exploreButton = document.querySelector('.destination-selector .btn');

    if (destinationSelect && exploreButton) {
        exploreButton.addEventListener('click', function() {
            const selectedDestination = destinationSelect.value;
            if (selectedDestination && selectedDestination !== 'Choose Your Destination') {
                // Redirect to specific destination page
                window.location.href = `${selectedDestination}.html`;
            } else {
                // Show alert for destination selection
                alert('Please select a destination to explore!');
            }
        });
    }

    // Counter animation
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // Intersection Observer for counter animation
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Video play button functionality
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');
    
    if (playButton && videoContainer) {
        playButton.addEventListener('click', function() {
            // Create video modal with real Kenya safari video
            const videoModal = document.createElement('div');
            videoModal.className = 'video-modal';
            videoModal.innerHTML = `
                <div class="video-modal-content">
                    <span class="video-modal-close">&times;</span>
                    <div class="video-wrapper">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/8ZK_S-46KwE?autoplay=1&rel=0" 
                                frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
                    </div>
                    <div class="video-info mt-3">
                        <h5>Kenya Safari Adventure</h5>
                        <p>Experience the magic of Kenya's wildlife and landscapes in this stunning showcase of our premium safari experiences.</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(videoModal);
            
            // Close modal functionality
            const closeBtn = videoModal.querySelector('.video-modal-close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(videoModal);
            });
            
            // Close on outside click
            videoModal.addEventListener('click', function(e) {
                if (e.target === videoModal) {
                    document.body.removeChild(videoModal);
                }
            });
        });
    }

    // Form validation and submission
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Submit form data to Supabase
                submitFormData(form);
            } else {
                showAlert('Please fill in all required fields.', 'error');
            }
        });
    });

    // Submit form data to Supabase
    async function submitFormData(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Submit to Supabase
            const response = await fetch('https://thmujhifulhmwpefjxyd.supabase.co/rest/v1/contact_inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobXVqaGlmdWxobXdwZWZqeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODIwNjgsImV4cCI6MjA3ODA1ODA2OH0.OoIbDIrAjcr9g0yNj5WQCwgxRtCrQiWMa7X09V9S44g'
                },
                body: JSON.stringify({
                    ...data,
                    created_at: new Date().toISOString()
                })
            });
            
            if (response.ok) {
                showAlert('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
            } else {
                throw new Error('Failed to submit form');
            }
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
        } catch (error) {
            console.error('Form submission error:', error);
            showAlert('Sorry, there was an error sending your message. Please try again.', 'error');
            
            // Reset button
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }
    }

    // Show alert messages
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Insert at the top of the page
        const container = document.querySelector('.container') || document.body;
        container.insertBefore(alertDiv, container.firstChild);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // WhatsApp integration
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track WhatsApp click event
            console.log('WhatsApp contact initiated');
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (mobileMenuToggle && navbarCollapse) {
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    mobileMenuToggle.click();
                }
            });
        });
    }

    // Search functionality (if search input exists)
    const searchInput = document.querySelector('#search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            const query = e.target.value.toLowerCase();
            // Implement search logic here
            performSearch(query);
        }, 300));
    }

    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Perform search
    function performSearch(query) {
        if (query.length < 2) return;
        
        // You can implement actual search logic here
        console.log('Searching for:', query);
    }

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: var(--card-shadow);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Error handling for images
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available';
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Page load performance optimization
    window.addEventListener('load', function() {
        // Hide loading screen if exists
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // ESC key to close modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.video-modal');
            modals.forEach(modal => {
                if (modal.parentNode) {
                    modal.remove();
                }
            });
        }
    });

    // Print functionality
    window.addEventListener('beforeprint', function() {
        // Optimize layout for printing
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });

    console.log('Kenya Safari Tours website loaded successfully! 🦁');
});

// Initialize Bootstrap Datepickers
function initializeDatepickers() {
    // Initialize datepickers for all date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        // Add datepicker functionality
        $(input).datepicker({
            format: 'yyyy-mm-dd',
            startDate: '0d', // Disable past dates
            todayHighlight: true,
            autoclose: true,
            orientation: 'bottom',
            templates: {
                leftArrow: '<i class="fas fa-chevron-left"></i>',
                rightArrow: '<i class="fas fa-chevron-right"></i>'
            }
        });

        // Set minimum date to today for check-in dates
        if (input.id && input.id.includes('checkin') || input.id.includes('startDate')) {
            $(input).datepicker('setStartDate', new Date());
        }

        // Set minimum date for check-out based on check-in selection
        if (input.id && input.id.includes('checkout') || input.id.includes('endDate')) {
            const checkinInput = document.querySelector('#checkin, #startDate');
            if (checkinInput) {
                $(checkinInput).on('changeDate', function() {
                    const selectedDate = new Date($(this).val());
                    if (selectedDate) {
                        const nextDay = new Date(selectedDate);
                        nextDay.setDate(nextDay.getDate() + 1);
                        $(input).datepicker('setStartDate', nextDay);
                    }
                });
            }
        }

        // Add visual feedback
        input.addEventListener('focus', function() {
            this.classList.add('datepicker-focused');
        });

        input.addEventListener('blur', function() {
            this.classList.remove('datepicker-focused');
        });
    });
}

// Utility functions

// Format currency
function formatCurrency(amount, currency = 'KES') {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-KE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (Kenyan format)
function isValidKenyanPhone(phone) {
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    return phoneRegex.test(phone);
}

// Local storage helpers
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

// API helper functions
async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatCurrency,
        formatDate,
        isValidEmail,
        isValidKenyanPhone,
        saveToLocalStorage,
        getFromLocalStorage,
        fetchWithRetry
    };
}