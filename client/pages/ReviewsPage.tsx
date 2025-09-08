import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsGridSection from '@/components/ReviewsGridSection';
import ReviewSubmissionForm from '@/components/ReviewSubmissionForm';
import ReviewsStatsSection from '@/components/ReviewsStatsSection';

export default function ReviewsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="coffeeMasterApp min-h-screen">
      <Navigation />
      
      <main className="coffeeMasterReviewsMain" id="main-content">
        {/* Skip to Content Link */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="coffeeMasterReviewsHero relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
          aria-labelledby="reviews-hero-title"
        >
          {/* Background Animation Elements */}
          <div className="coffeeMasterReviewsBg absolute inset-0" aria-hidden="true">
            {/* Coffee Beans Floating */}
            <div className="coffeeMasterFloatingReviewBeans absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterReviewBean absolute w-3 h-3 bg-amber-400 rounded-full opacity-20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${4 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Review Stars Floating */}
            <div className="coffeeMasterFloatingStars absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterReviewStar absolute text-amber-300 opacity-10 animate-float-delayed"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    fontSize: `${1 + Math.random() * 1.5}rem`,
                  }}
                >
                  ⭐
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="coffeeMasterReviewsOverlay absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

            {/* Background Pattern */}
            <div className="coffeeMasterReviewsPattern absolute inset-0">
              <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="coffeeMasterReviewsHeroContent relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className={`coffeeMasterReviewsHeroInner transform transition-all duration-1500 ${
              heroVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              <div className={`coffeeMasterReviewsBadge mb-6 transform transition-all duration-1000 delay-300 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <span className="coffeeMasterBadgeText inline-block px-6 py-3 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-200 font-medium text-lg">
                  Trusted by Coffee Lovers
                </span>
              </div>

              {/* Main Title */}
              <h1 
                id="reviews-hero-title"
                className={`coffeeMasterReviewsTitle text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-500 ${
                  heroVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
              >
                Customer{' '}
                <span className="coffeeMasterTitleHighlight bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Reviews
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`coffeeMasterReviewsSubtitle text-xl lg:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                Discover what fellow coffee enthusiasts are saying about their CoffeeMaster experience. 
                Join thousands of satisfied customers who've found their perfect cup.
              </p>

              {/* Quick Stats */}
              <div className={`coffeeMasterQuickStats flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 transform transition-all duration-1000 delay-1000 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <div className="coffeeMasterQuickStat text-center">
                  <div className="coffeeMasterStatNumber text-3xl font-bold text-amber-300 mb-1" aria-label="Average rating 4.9 out of 5">4.9</div>
                  <div className="coffeeMasterStatStars text-amber-400 mb-1" aria-hidden="true">★★★★★</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">Average Rating</p>
                </div>
                <div className="coffeeMasterStatDivider hidden sm:block w-px h-16 bg-amber-500/30" aria-hidden="true"></div>
                <div className="coffeeMasterQuickStat text-center">
                  <div className="coffeeMasterStatNumber text-3xl font-bold text-amber-300 mb-1">12K+</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">Happy Customers</p>
                </div>
                <div className="coffeeMasterStatDivider hidden sm:block w-px h-16 bg-amber-500/30" aria-hidden="true"></div>
                <div className="coffeeMasterQuickStat text-center">
                  <div className="coffeeMasterStatNumber text-3xl font-bold text-amber-300 mb-1">98%</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">Would Recommend</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`coffeeMasterReviewsHeroCta flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1200 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <button 
                  onClick={() => {
                    const reviewsGrid = document.querySelector('.coffeeMasterReviewsGrid');
                    reviewsGrid?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="coffeeMasterReviewsCta group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  aria-label="Scroll to read customer reviews"
                >
                  <span className="coffeeMasterCtaText">Read Reviews</span>
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <button 
                  onClick={() => {
                    const reviewForm = document.querySelector('.coffeeMasterReviewForm');
                    reviewForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="coffeeMasterWriteReviewCta group px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-300 font-semibold rounded-full hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  aria-label="Scroll to write a review form"
                >
                  <span className="coffeeMasterCtaText">Write a Review</span>
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="coffeeMasterReviewsDecorations absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="coffeeMasterDecor1 absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            <div className="coffeeMasterDecor2 absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>
        </section>

        {/* Reviews Grid Section */}
        <ReviewsGridSection />

        {/* Statistics Section */}
        <ReviewsStatsSection />

        {/* Review Submission Form */}
        <ReviewSubmissionForm />

        {/* Call to Action Section */}
        <section className="coffeeMasterReviewsCta py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
          <div className="coffeeMasterCtaContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="coffeeMasterCtaTitle text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience CoffeeMaster?
            </h2>
            <p className="coffeeMasterCtaDesc text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover your perfect cup today. 
              Taste the difference that quality and passion make.
            </p>
            <div className="coffeeMasterCtaActions flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/coffee'}
                className="coffeeMasterShopBtn px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
              >
                Shop Coffee Now
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                className="coffeeMasterLearnBtn px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
