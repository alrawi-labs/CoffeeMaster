import { useState, useEffect, useRef } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="coffeeMasterNewsletterSection py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="coffeeMasterNewsletterBg absolute inset-0">
        {/* Floating Coffee Elements */}
        <div className="coffeeMasterFloatingElements absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="coffeeMasterFloatingElement absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              <div className={`w-8 h-8 bg-amber-400 rounded-full animate-float ${
                i % 3 === 0 ? 'animate-spin-slow' : ''
              }`}>
                <span className="text-xs flex items-center justify-center h-full">
                  {i % 4 === 0 ? '☕' : i % 4 === 1 ? '🫘' : i % 4 === 2 ? '💌' : '✨'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="coffeeMasterGradientOverlay absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-900/20"></div>
      </div>

      <div className="coffeeMasterNewsletterContainer relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Newsletter Card */}
        <div className={`coffeeMasterNewsletterCard bg-gradient-to-r from-amber-800/30 to-amber-700/30 backdrop-blur-lg rounded-3xl p-8 lg:p-16 border border-amber-600/30 shadow-2xl transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <div className="coffeeMasterNewsletterContent text-center">
            {/* Icon */}
            <div className={`coffeeMasterNewsletterIcon mb-8 transform transition-all duration-1000 delay-200 ${
              sectionVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-12'
            }`}>
              <div className="coffeeMasterIconContainer w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-3xl text-white">📧</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className={`coffeeMasterNewsletterTitle text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 delay-400 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Stay in the Loop
            </h2>

            {/* Subheadline */}
            <p className={`coffeeMasterNewsletterSubtitle text-xl text-amber-200 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Get exclusive access to new coffee releases, brewing tips, and special offers. 
              Join our community of coffee enthusiasts and never miss a beat.
            </p>

            {/* Benefits */}
            <div className={`coffeeMasterNewsletterBenefits grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-800 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="coffeeMasterBenefit text-center">
                <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎁</span>
                </div>
                <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">Exclusive Offers</h4>
                <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Get first access to sales and member-only discounts</p>
              </div>
              <div className="coffeeMasterBenefit text-center">
                <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">☕</span>
                </div>
                <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">New Releases</h4>
                <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Be the first to try our latest coffee discoveries</p>
              </div>
              <div className="coffeeMasterBenefit text-center">
                <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📚</span>
                </div>
                <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">Brewing Tips</h4>
                <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Expert advice to perfect your coffee brewing skills</p>
              </div>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className={`coffeeMasterNewsletterForm max-w-md mx-auto transform transition-all duration-1000 delay-1000 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="coffeeMasterFormGroup relative">
                <div className="coffeeMasterInputWrapper flex flex-col sm:flex-row gap-4">
                  <div className="coffeeMasterEmailInput relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border-2 border-transparent text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:border-amber-400 focus:bg-white transition-all duration-300 text-lg"
                      required
                      disabled={isLoading || isSubmitted}
                    />
                    {email && (
                      <div className="coffeeMasterInputIcon absolute right-4 top-1/2 transform -translate-y-1/2">
                        <span className="text-green-500 text-xl">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading || isSubmitted || !email}
                    className={`coffeeMasterSubmitBtn group px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      isSubmitted
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isLoading ? (
                      <div className="coffeeMasterLoadingSpinner flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : isSubmitted ? (
                      <div className="coffeeMasterSuccessMessage flex items-center justify-center">
                        <span className="mr-2">✓</span>
                        Subscribed!
                      </div>
                    ) : (
                      <div className="coffeeMasterSubmitText flex items-center justify-center">
                        Subscribe
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
                
                {/* Privacy Notice */}
                <p className="coffeeMasterPrivacyNotice text-amber-300 text-sm mt-4 opacity-80">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>

            {/* Social Proof */}
            <div className={`coffeeMasterSocialProof mt-12 transform transition-all duration-1000 delay-1200 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="coffeeMasterProofStats flex flex-col sm:flex-row items-center justify-center gap-8 text-amber-200">
                <div className="coffeeMasterProofStat flex items-center">
                  <span className="coffeeMasterStatIcon text-2xl mr-2">👥</span>
                  <span className="coffeeMasterStatText">
                    <strong className="text-white">12,000+</strong> Subscribers
                  </span>
                </div>
                <div className="coffeeMasterProofSeparator hidden sm:block w-1 h-8 bg-amber-600/50"></div>
                <div className="coffeeMasterProofStat flex items-center">
                  <span className="coffeeMasterStatIcon text-2xl mr-2">⭐</span>
                  <span className="coffeeMasterStatText">
                    <strong className="text-white">4.9/5</strong> Rating
                  </span>
                </div>
                <div className="coffeeMasterProofSeparator hidden sm:block w-1 h-8 bg-amber-600/50"></div>
                <div className="coffeeMasterProofStat flex items-center">
                  <span className="coffeeMasterStatIcon text-2xl mr-2">📬</span>
                  <span className="coffeeMasterStatText">
                    <strong className="text-white">Weekly</strong> Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className={`coffeeMasterAdditionalCta mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-1400 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Coffee Subscription CTA */}
          <div className="coffeeMasterCtaCard bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="coffeeMasterCtaIcon w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white">🔄</span>
            </div>
            <h3 className="coffeeMasterCtaTitle text-2xl font-bold text-white mb-4">Coffee Subscription</h3>
            <p className="coffeeMasterCtaDesc text-amber-200 mb-6 leading-relaxed">
              Never run out of great coffee. Get fresh beans delivered monthly with our flexible subscription service.
            </p>
            <button className="coffeeMasterCtaButton bg-transparent border-2 border-amber-400 text-amber-300 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Start Subscription
            </button>
          </div>

          {/* Gift Cards CTA */}
          <div className="coffeeMasterCtaCard bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="coffeeMasterCtaIcon w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white">🎁</span>
            </div>
            <h3 className="coffeeMasterCtaTitle text-2xl font-bold text-white mb-4">Gift Cards</h3>
            <p className="coffeeMasterCtaDesc text-amber-200 mb-6 leading-relaxed">
              Share the love of great coffee with friends and family. Perfect for any coffee enthusiast in your life.
            </p>
            <button className="coffeeMasterCtaButton bg-transparent border-2 border-amber-400 text-amber-300 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Buy Gift Cards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
