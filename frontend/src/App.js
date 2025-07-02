import React, { useEffect, useRef } from 'react';
import './App.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(14, 165, 233, 0.8) 100%), url('https://images.unsplash.com/photo-1574155267225-3b5423dd45d9')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="hero-responsive font-black mb-6 leading-tight">
            Experience the <span className="text-gradient bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Ultimate</span> Live Music
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-90 leading-relaxed">
            Discover amazing concerts, festivals, and live performances. Get your tickets now and be part of unforgettable musical experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-premium bg-white text-primary-800 px-8 py-4 rounded-xl font-bold text-lg shadow-premium hover:shadow-glow-blue hover:scale-105 transform transition-all duration-300 focus-ring">
              🎫 Browse Events
            </button>
            <button className="glass px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 focus-ring">
              ▶️ Watch Highlights
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 bg-white rounded-full animate-pulse mt-2 h-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Events Component
const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: "Electric Nights Festival",
      artist: "Multiple Artists",
      date: "July 15, 2025",
      time: "6:00 PM",
      venue: "Lagos Music Arena",
      price: "₦15,000",
      image: "https://images.unsplash.com/photo-1610901056511-31de499995f0",
      genre: "Electronic",
      attendees: "5000+"
    },
    {
      id: 2,
      title: "Afrobeats Live",
      artist: "Burna Boy & Friends",
      date: "August 22, 2025",
      time: "7:30 PM",
      venue: "Accra Sports Stadium",
      price: "₦25,000",
      image: "https://images.pexels.com/photos/10206936/pexels-photo-10206936.jpeg",
      genre: "Afrobeats",
      attendees: "10000+"
    },
    {
      id: 3,
      title: "Summer Vibes Concert",
      artist: "Tiwa Savage",
      date: "September 10, 2025",
      time: "8:00 PM",
      venue: "Eko Atlantic City",
      price: "₦20,000",
      image: "https://images.unsplash.com/photo-1604352358303-ff481a221d01",
      genre: "R&B/Pop",
      attendees: "8000+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss these incredible live performances. Get your tickets before they sell out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-premium"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 glass-dark text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.genre}
                </div>
                <div className="absolute bottom-4 left-4 glass-dark text-white px-3 py-1 rounded-full text-sm">
                  👥 {event.attendees}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-primary-600 font-semibold mb-4">{event.artist}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{event.venue}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-primary-700">{event.price}</div>
                  <button className="btn-premium bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 hover:shadow-glow-blue transform hover:scale-105 transition-all duration-300 focus-ring">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const features = [
    {
      icon: "⚡",
      title: "Instant Booking",
      description: "Book your tickets instantly with our fast and secure payment system"
    },
    {
      icon: "🎫",
      title: "Digital Tickets",
      description: "Get your tickets delivered instantly to your phone - no printing required"
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security"
    },
    {
      icon: "🎵",
      title: "Best Events",
      description: "Carefully curated selection of the hottest concerts and festivals"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "We guarantee the best prices on all events - no hidden fees"
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to help you"
    }
  ];

  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-transparent to-cyan-400"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Why Choose <span className="text-gradient bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We make it easy to discover and attend the best live music events in Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="fade-in-up glass-dark p-8 rounded-2xl text-center hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Kemi Johnson",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "Amazing experience! Got my tickets instantly and the event was incredible. Will definitely use this platform again.",
      avatar: "KJ"
    },
    {
      name: "David Asante",
      location: "Accra, Ghana",
      rating: 5,
      text: "Best ticket platform in Africa! Easy to use, secure payments, and great customer service. Highly recommended!",
      avatar: "DA"
    },
    {
      name: "Sarah Okoye",
      location: "Abuja, Nigeria",
      rating: 5,
      text: "Love how smooth the booking process is. Digital tickets are so convenient - no more worrying about losing paper tickets!",
      avatar: "SO"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(30, 64, 175, 0.9) 100%), url('https://images.unsplash.com/photo-1568738558403-f4e8c8f7a842')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            What Our <span className="text-gradient bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Fans</span> Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of music lovers who trust us for their concert experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="fade-in-up glass-dark p-8 rounded-2xl"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "How do I get my tickets after purchase?",
      answer: "Your digital tickets will be sent to your email immediately after purchase. You can also access them through your account dashboard."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refund policies vary by event. Most events allow refunds up to 48 hours before the event date. Check the specific event terms for details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, bank transfers, and mobile money payments including MTN Mobile Money and Airtel Money."
    },
    {
      question: "How do I know if my payment was successful?",
      answer: "You'll receive an immediate confirmation email and SMS once your payment is processed successfully. Your tickets will be included in this confirmation."
    },
    {
      question: "Can I transfer my ticket to someone else?",
      answer: "Yes, most events allow ticket transfers. You can easily transfer tickets through your account dashboard or contact our support team for assistance."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="fade-in-up bg-white rounded-xl shadow-lg overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus-ring"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-slide-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer 
      className="bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%), url('https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center fade-in-up">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on the hottest concerts and exclusive pre-sale tickets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white bg-opacity-10 border border-gray-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400"
              />
              <button className="btn-premium bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 hover:shadow-glow-blue transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="fade-in-left">
            <h4 className="text-2xl font-black mb-4 text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              🎵 TicketHub
            </h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Africa's premier destination for live music experiences. Connecting fans with unforgettable concerts and festivals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors duration-200">📘</a>
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors duration-200">📷</a>
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors duration-200">🐦</a>
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors duration-200">🎵</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Browse Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
            <h5 className="text-lg font-bold mb-4">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in-right">
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>support@tickethub.africa</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+234 901 234 5678</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TicketHub Africa. All rights reserved. Made with ❤️ for music lovers.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isVisible, setIsVisible] = React.useState({});
  const observerRef = useRef();

  useEffect(() => {
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach((el, index) => {
      el.dataset.id = index;
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <FeaturedEvents />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;