import { useState, useEffect, useRef } from 'react';

export default function BlogNewsletterSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const interestOptions = [
    { id: 'brewing-tips', label: 'Brewing Tips', icon: '☕' },
    { id: 'recipes', label: 'Recipes', icon: '🍴' },
    { id: 'sustainability', label: 'Sustainability', icon: '🌱' },
    { id: 'origin-stories', label: 'Origin Stories', icon: '🌍' },
    { id: 'product-news', label: 'Product News', icon: '📦' }
  ];

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
    if (!email || !name) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      setName('');
      setInterests([]);
      
      // Reset success state after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1500);
  };

  const toggleInterest = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  if (isSubmitted) {
    return (
      <section className="coffeeMasterBlogNewsletter py-20 lg:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="coffeeMasterNewsletterContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="coffeeMasterSuccessCard bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center">
            <div className="coffeeMasterSuccessIcon w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="coffeeMasterSuccessTitle text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Coffee Community!
            </h3>
            <p className="coffeeMasterSuccessDesc text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for subscribing to our blog newsletter! You'll receive your first update within the next few days, 
              packed with the latest coffee stories, brewing tips, and exclusive content.
            </p>
            <div className="coffeeMasterSuccessActions">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="coffeeMasterBackBtn px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="coffeeMasterBlogNewsletter py-20 lg:py-32 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="coffeeMasterNewsletterBg absolute inset-0" aria-hidden="true">
        {/* Floating Elements */}
        <div className="coffeeMasterFloatingElements absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="coffeeMasterFloatingElement absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              <div className={`w-6 h-6 bg-amber-400 rounded-full animate-float ${
                i % 3 === 0 ? 'animate-spin-slow' : ''
              }`}>
                <span className="text-xs flex items-center justify-center h-full">
                  {i % 5 === 0 ? '📧' : i % 5 === 1 ? '☕' : i % 5 === 2 ? '📝' : i % 5 === 3 ? '💌' : '✨'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="coffeeMasterGradientOverlay absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-900/20"></div>
      </div>

      <div className="coffeeMasterNewsletterContainer relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`coffeeMasterNewsletterCard bg-gradient-to-r from-amber-800/30 to-amber-700/30 backdrop-blur-lg rounded-3xl p-8 lg:p-16 border border-amber-600/30 shadow-2xl transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          {/* Header */}
          <div className="coffeeMasterNewsletterHeader text-center mb-12">
            <div className={`coffeeMasterNewsletterIcon mb-8 transform transition-all duration-1000 delay-200 ${
              sectionVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-12'
            }`}>
              <div className="coffeeMasterIconContainer w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-3xl text-white">📧</span>
              </div>
            </div>

            <h2 className={`coffeeMasterNewsletterTitle text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 delay-400 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Never Miss a Story
            </h2>

            <p className={`coffeeMasterNewsletterSubtitle text-xl text-amber-200 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Subscribe to our weekly newsletter and get the latest coffee stories, brewing guides, 
              and exclusive content delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className={`coffeeMasterNewsletterForm max-w-2xl mx-auto transform transition-all duration-1000 delay-800 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="coffeeMasterFormGrid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Name Field */}
              <div className="coffeeMasterFormField">
                <label htmlFor="newsletter-name" className="coffeeMasterFieldLabel block text-sm font-semibold text-amber-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="newsletter-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="coffeeMasterInput w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-transparent text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-all duration-300"
                  placeholder="Enter your name"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Field */}
              <div className="coffeeMasterFormField">
                <label htmlFor="newsletter-email" className="coffeeMasterFieldLabel block text-sm font-semibold text-amber-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="coffeeMasterInput w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-transparent text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-all duration-300"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Interests Selection */}
            <div className="coffeeMasterInterestsSection mb-8">
              <label className="coffeeMasterFieldLabel block text-sm font-semibold text-amber-200 mb-4">
                What interests you most? (Optional)
              </label>
              <div className="coffeeMasterInterestsGrid grid grid-cols-2 lg:grid-cols-5 gap-3">
                {interestOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleInterest(option.id)}
                    className={`coffeeMasterInterestBtn p-3 rounded-lg border-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                      interests.includes(option.id)
                        ? 'bg-amber-500 border-amber-400 text-white'
                        : 'bg-white/20 border-amber-600/50 text-amber-200 hover:bg-white/30 hover:border-amber-500'
                    }`}
                    disabled={isLoading}
                  >
                    <div className="coffeeMasterInterestContent text-center">
                      <span className="coffeeMasterInterestIcon block text-lg mb-1">{option.icon}</span>
                      <span className="coffeeMasterInterestLabel text-xs">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="coffeeMasterFormSubmit">
              <button
                type="submit"
                disabled={isLoading || !email || !name}
                className={`coffeeMasterSubmitBtn w-full py-4 px-8 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isLoading
                    ? 'bg-gray-400 text-gray-200'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isLoading ? (
                  <div className="coffeeMasterSubmitLoading flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="coffeeMasterSubmitText flex items-center justify-center">
                    Subscribe to Newsletter
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="coffeeMasterPrivacyNotice text-amber-300 text-sm mt-4 text-center opacity-80">
              We respect your privacy. Unsubscribe at any time. No spam, just great coffee content.
            </p>
          </form>

          {/* Benefits */}
          <div className={`coffeeMasterNewsletterBenefits grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transform transition-all duration-1000 delay-1000 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="coffeeMasterBenefit text-center">
              <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📚</span>
              </div>
              <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">Weekly Guides</h4>
              <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Expert brewing tips and coffee knowledge</p>
            </div>
            <div className="coffeeMasterBenefit text-center">
              <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎁</span>
              </div>
              <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">Exclusive Content</h4>
              <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Subscriber-only articles and early access</p>
            </div>
            <div className="coffeeMasterBenefit text-center">
              <div className="coffeeMasterBenefitIcon w-12 h-12 bg-amber-600/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌍</span>
              </div>
              <h4 className="coffeeMasterBenefitTitle font-semibold text-amber-200 mb-2">Origin Stories</h4>
              <p className="coffeeMasterBenefitDesc text-amber-300 text-sm">Behind-the-scenes farm visits and stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
