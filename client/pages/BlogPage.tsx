import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import PopularPostsSidebar from '@/components/PopularPostsSidebar';
import BlogNewsletterSection from '@/components/BlogNewsletterSection';

export default function BlogPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="coffeeMasterApp min-h-screen">
      <Navigation />
      
      <main className="coffeeMasterBlogMain" id="main-content">
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
          className="coffeeMasterBlogHero relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
          aria-labelledby="blog-hero-title"
        >
          {/* Background Animation Elements */}
          <div className="coffeeMasterBlogBg absolute inset-0" aria-hidden="true">
            {/* Coffee Beans Floating */}
            <div className="coffeeMasterFloatingBlogBeans absolute inset-0">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterBlogBean absolute w-3 h-3 bg-amber-400 rounded-full opacity-20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${4 + Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Paper/Blog Elements Floating */}
            <div className="coffeeMasterFloatingPapers absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterBlogPaper absolute text-amber-300 opacity-10 animate-float-delayed"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    fontSize: `${1.2 + Math.random() * 1.8}rem`,
                  }}
                >
                  {i % 4 === 0 ? '📰' : i % 4 === 1 ? '📝' : i % 4 === 2 ? '☕' : '📖'}
                </div>
              ))}
            </div>

            {/* Steam Animation */}
            <div className="coffeeMasterBlogSteam absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterSteamLine absolute w-2 h-24 bg-gradient-to-t from-amber-300/20 to-transparent animate-coffee-steam"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${30 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="coffeeMasterBlogOverlay absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

            {/* Background Pattern */}
            <div className="coffeeMasterBlogPattern absolute inset-0">
              <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="coffeeMasterPattern3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-700/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="coffeeMasterBlogHeroContent relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className={`coffeeMasterBlogHeroInner transform transition-all duration-1500 ${
              heroVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              <div className={`coffeeMasterBlogBadge mb-6 transform transition-all duration-1000 delay-300 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <span className="coffeeMasterBadgeText inline-block px-6 py-3 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-200 font-medium text-lg">
                  Coffee Culture & Stories
                </span>
              </div>

              {/* Main Title */}
              <h1 
                id="blog-hero-title"
                className={`coffeeMasterBlogTitle text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-500 ${
                  heroVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
              >
                Our{' '}
                <span className="coffeeMasterTitleHighlight bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`coffeeMasterBlogSubtitle text-xl lg:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                Explore the rich world of coffee culture, from brewing techniques and origin stories 
                to sustainability practices and the latest industry insights. Your journey to coffee mastery starts here.
              </p>

              {/* Quick Navigation Pills */}
              <div className={`coffeeMasterBlogNav flex flex-wrap justify-center gap-4 mb-8 transform transition-all duration-1000 delay-1000 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                {['Latest Posts', 'Coffee Tips', 'Recipes', 'Sustainability'].map((item) => (
                  <button
                    key={item}
                    className="coffeeMasterNavPill px-4 py-2 bg-amber-700/30 backdrop-blur-sm border border-amber-500/40 text-amber-200 font-medium rounded-full hover:bg-amber-600/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                    onClick={() => {
                      const blogGrid = document.querySelector('.coffeeMasterBlogGrid');
                      blogGrid?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`coffeeMasterBlogHeroCta flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1200 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <button 
                  onClick={() => {
                    const blogGrid = document.querySelector('.coffeeMasterBlogGrid');
                    blogGrid?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="coffeeMasterBlogCta group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  aria-label="Scroll to read blog posts"
                >
                  <span className="coffeeMasterCtaText">Explore Articles</span>
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <button 
                  onClick={() => {
                    const newsletter = document.querySelector('.coffeeMasterBlogNewsletter');
                    newsletter?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="coffeeMasterNewsletterCta group px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-300 font-semibold rounded-full hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  aria-label="Scroll to newsletter subscription"
                >
                  <span className="coffeeMasterCtaText">Subscribe to Updates</span>
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* Blog Stats */}
              <div className={`coffeeMasterBlogStats flex flex-col sm:flex-row justify-center items-center gap-8 mt-8 transform transition-all duration-1000 delay-1400 ${
                heroVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
                <div className="coffeeMasterBlogStat text-center">
                  <div className="coffeeMasterStatNumber text-2xl font-bold text-amber-300 mb-1">150+</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">Articles Published</p>
                </div>
                <div className="coffeeMasterStatDivider hidden sm:block w-px h-12 bg-amber-500/30" aria-hidden="true"></div>
                <div className="coffeeMasterBlogStat text-center">
                  <div className="coffeeMasterStatNumber text-2xl font-bold text-amber-300 mb-1">25K+</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">Monthly Readers</p>
                </div>
                <div className="coffeeMasterStatDivider hidden sm:block w-px h-12 bg-amber-500/30" aria-hidden="true"></div>
                <div className="coffeeMasterBlogStat text-center">
                  <div className="coffeeMasterStatNumber text-2xl font-bold text-amber-300 mb-1">Weekly</div>
                  <p className="coffeeMasterStatLabel text-amber-200 text-sm">New Content</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="coffeeMasterBlogDecorations absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="coffeeMasterDecor1 absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            <div className="coffeeMasterDecor2 absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <BlogPostsGrid />

        {/* Popular Posts & Sidebar Section */}
        <PopularPostsSidebar />

        {/* Newsletter Section */}
        <BlogNewsletterSection />

        {/* Call to Action Section */}
        <section className="coffeeMasterBlogCta py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
          <div className="coffeeMasterCtaContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="coffeeMasterCtaTitle text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Coffee Journey?
            </h2>
            <p className="coffeeMasterCtaDesc text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              From bean to cup, every story matters. Explore our coffee collection and discover 
              the perfect blend that matches your taste and values.
            </p>
            <div className="coffeeMasterCtaActions flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/coffee'}
                className="coffeeMasterShopBtn px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
              >
                Explore Our Coffee
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                className="coffeeMasterLearnBtn px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
              >
                Our Story
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
