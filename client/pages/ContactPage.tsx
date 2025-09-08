import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    setHeroVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // You can add logic here to randomly fail for demonstration
      const isSuccess = Math.random() > 0.1; // 90% chance of success

      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }

      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="coffeeMasterApp min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      <main className="coffeeMasterContactMain">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="coffeeMasterContactHero relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #1c0f0a 0%, #2d1b16 50%, #1c0f0a 100%)`,
          }}
        >
          {/* Parallax Background Elements */}
          <div 
            className="coffeeMasterParallaxBg absolute inset-0 pointer-events-none"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-600 rounded-full opacity-20 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Get in{' '}
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Visit us, call us, or send us a message.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="coffeeMasterContactContent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Form */}
              <div className="coffeeMasterFormContainer">
                <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Have a question or want to make a reservation? We're here to help!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-0 transition-colors duration-300 text-gray-700 placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-0 transition-colors duration-300 text-gray-700 placeholder-gray-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-0 transition-colors duration-300 text-gray-700 placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-0 transition-colors duration-300 text-gray-700 placeholder-gray-400 resize-none"
                        placeholder="Tell us about your inquiry, reservation request, or just say hello!"
                      ></textarea>
                    </div>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
                        <p className="text-green-700 font-medium">
                          ✅ Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                     {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-700 font-medium">
                          ❌ Something went wrong. Please try again.
                        </p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-lg rounded-xl hover:from-amber-700 hover:to-amber-800 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Map */}
              <div className="coffeeMasterContactInfo space-y-8">
                
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                    Visit Our Coffee Shop
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          123 Coffee Street<br />
                          Downtown District<br />
                          Coffee City, CC 12345
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+15551234567" className="hover:text-amber-600 transition-colors duration-300">
                            (555) 123-4567
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:hello@coffeemaster.com" className="hover:text-amber-600 transition-colors duration-300">
                            hello@coffeemaster.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Mon - Fri: 6:00 AM - 8:00 PM</p>
                          <p>Saturday: 7:00 AM - 9:00 PM</p>
                          <p>Sunday: 7:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h3>
                  </div>
                  <div className="relative h-80 bg-gray-200">
                     <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257593365985!2d-122.41941548468119!3d37.77492957975823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e483d3d%3A0x4a501367f076adff!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618413863481!5m2!1sen!2sus"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       className="absolute inset-0"
                     ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #d97706;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b45309;
        }
      `}</style>
    </div>
  );
}