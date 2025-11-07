-- Kenya Safari Tours - Supabase Database Setup
-- Run these SQL commands in your Supabase SQL editor

-- Create contact inquiries table
CREATE TABLE contact_inquiries (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255) NOT NULL,
    destination VARCHAR(100),
    travel_dates TEXT,
    group_size VARCHAR(20),
    budget VARCHAR(50),
    message TEXT NOT NULL,
    newsletter BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter subscribers table
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    active BOOLEAN DEFAULT true
);

-- Create tour bookings table
CREATE TABLE tour_bookings (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    tour_package VARCHAR(100) NOT NULL,
    travel_date DATE NOT NULL,
    return_date DATE,
    adults INTEGER DEFAULT 1,
    children INTEGER DEFAULT 0,
    total_amount DECIMAL(10,2),
    special_requests TEXT,
    booking_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for testimonials
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    customer_location VARCHAR(100),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    tour_experience VARCHAR(100),
    approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public access (since this is a contact form)
CREATE POLICY "Public access for contact inquiries" ON contact_inquiries FOR ALL USING (true);
CREATE POLICY "Public access for newsletter" ON newsletter_subscribers FOR ALL USING (true);
CREATE POLICY "Public access for bookings" ON tour_bookings FOR ALL USING (true);
CREATE POLICY "Public access for testimonials" ON testimonials FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX idx_contact_inquiries_created_at ON contact_inquiries(created_at);
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_tour_bookings_travel_date ON tour_bookings(travel_date);
CREATE INDEX idx_testimonials_approved ON testimonials(approved);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tour_bookings_updated_at BEFORE UPDATE ON tour_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample testimonials
INSERT INTO testimonials (customer_name, customer_location, rating, comment, tour_experience, approved) VALUES
('Sarah Johnson', 'London, UK', 5, 'An absolutely incredible safari experience! Cavin expertise and the team professionalism made our Kenya adventure unforgettable.', 'Masai Mara Safari', true),
('Michael Chen', 'Singapore', 5, 'The attention to detail and personalized service was exceptional. Every moment was perfectly organized.', 'Kenya Highlights', true),
('Emma Williams', 'Australia', 5, 'Professional, knowledgeable, and passionate about Kenya. A truly magical experience!', 'Amboseli Adventure', true);

-- Grant permissions to anon user for public access
GRANT ALL ON contact_inquiries TO anon;
GRANT ALL ON newsletter_subscribers TO anon;
GRANT ALL ON tour_bookings TO anon;
GRANT ALL ON testimonials TO anon;

-- Insert default package information (optional)
INSERT INTO tour_bookings (customer_name, customer_email, tour_package, travel_date, adults, booking_status) 
VALUES ('Sample Booking', 'sample@email.com', 'Masai Mara Safari', '2025-12-01', 2, 'pending')
ON CONFLICT DO NOTHING;

-- Create a view for approved testimonials
CREATE OR REPLACE VIEW approved_testimonials AS
SELECT * FROM testimonials WHERE approved = true ORDER BY created_at DESC;

-- Grant access to the view
GRANT SELECT ON approved_testimonials TO anon;