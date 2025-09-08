import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoffeeMenuSection from "@/components/CoffeeMenuSection";
import BrewingExperienceSection from "@/components/BrewingExperienceSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function CoffeePage() {
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setHeroVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="coffeeMasterApp min-h-screen">
      <Navigation />

      <main className="coffeeMasterCoffeeMain">
        {/* Hero Section with Parallax */}
        <section
          ref={heroRef}
          className="coffeeMasterCoffeeHero relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #1c0f0a 0%, #2d1b16 50%, #1c0f0a 100%)`,
          }}
        >
          {/* Parallax Background Elements */}
          <div
            className="coffeeMasterParallaxBg absolute inset-0 pointer-events-none"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            {/* Coffee Beans Floating Animation */}
            <div className="coffeeMasterFloatingBeans absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`coffeeMasterBean absolute w-2 h-2 bg-amber-600 rounded-full opacity-30 animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Steam Animation */}
            <div className="coffeeMasterSteamElements absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="coffeeMasterSteam absolute w-1 h-20 bg-gradient-to-t from-amber-300/20 to-transparent opacity-40 animate-coffee-steam"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Background Pattern */}
            <div className="coffeeMasterBgPattern absolute inset-0">
              <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="coffeeMasterPattern3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="coffeeMasterHeroContent relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div
              className={`coffeeMasterHeroInner transform transition-all duration-1500 ${
                heroVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Subtitle Badge */}
              <div
                className={`coffeeMasterHeroSubtitle mb-8 transform transition-all duration-1000 delay-300 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <span className="coffeeMasterSubtitleBadge inline-block px-6 py-3 bg-amber-900/30 backdrop-blur-sm border border-amber-700/50 rounded-full text-amber-200 font-medium text-lg">
                  Premium Coffee Collection
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`coffeeMasterHeroTitle text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transform transition-all duration-1000 delay-500 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Discover{" "}
                <span className="coffeeMasterTitleHighlight bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent animate-glow">
                  Extraordinary
                </span>
                <br />
                Coffee
              </h1>

              {/* Subheadline */}
              <p
                className={`coffeeMasterHeroDesc text-xl lg:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                From single-origin masterpieces to artisanal blends, explore our
                curated collection of the world's finest coffee beans, roasted
                to perfection.
              </p>

              {/* CTA Buttons */}
              <div
                className={`coffeeMasterHeroCta flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-1000 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <button
                  onClick={() => {
                    const menuSection = document.querySelector(
                      ".coffeeMasterMenuSection",
                    );
                    menuSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="coffeeMasterCtaPrimary group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-lg rounded-full hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <span className="coffeeMasterBtnText relative z-10">
                    Explore Our Coffee
                  </span>
                  <div className="coffeeMasterBtnGlow absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="coffeeMasterBtnRipple absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 rounded-full"></div>
                </button>

                <button
                  onClick={() => {
                    const brewingSection = document.querySelector(
                      ".coffeeMasterBrewingSection",
                    );
                    brewingSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="coffeeMasterCtaSecondary group px-10 py-5 bg-transparent border-2 border-amber-500 text-amber-300 font-bold text-lg rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="coffeeMasterSecondaryText">
                    View Brewing Guide
                  </span>
                  <svg
                    className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="coffeeMasterHeroDecorations absolute inset-0 pointer-events-none">
            <div className="coffeeMasterDecor1 absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
            <div className="coffeeMasterDecor2 absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          </div>
          {/* Scroll Indicator */}
          <div
            className={`coffeeMasterScrollIndicator absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
              heroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className="coffeeMasterScrollArrow flex flex-col items-center text-amber-300 animate-bounce cursor-pointer"
              onClick={() => {
                const menuSection = document.querySelector(
                  ".coffeeMasterMenuSection",
                );
                menuSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="coffeeMasterScrollText text-sm mb-3 font-medium">
                Scroll to explore
              </span>
              <div className="coffeeMasterScrollIcon w-6 h-10 border-2 border-amber-400 rounded-full relative">
                <div className="coffeeMasterScrollDot absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Menu Section */}
        <CoffeeMenuSection />

        {/* Brewing Experience Section */}
        <BrewingExperienceSection />

        {/* Customer Reviews Section */}
        <CustomerReviewsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
