import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import CoffeeMasterLogo from "@/components/CoffeeMasterLogo";

export default function AboutPage() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="coffeeMasterApp min-h-screen flex flex-col">
      <Navigation />

      <main className="coffeeMasterAboutMain flex-1">
        {/* Hero Section */}
        <section className="coffeeMasterAboutHero relative py-32 lg:py-40 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 overflow-hidden">
          <div className="coffeeMasterAboutHeroBg absolute inset-0">
            <div className="coffeeMasterBgOverlay absolute inset-0 bg-black/20"></div>
            <div className="coffeeMasterBgPattern absolute inset-0 opacity-10">
              <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-40 h-40 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="coffeeMasterAboutHeroContainer relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="coffeeMasterAboutTitle text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Coffee Story
              </span>
            </h1>
            <p className="coffeeMasterAboutSubtitle text-xl text-amber-200 max-w-2xl mx-auto">
              From bean to cup, every step is crafted with intention, passion,
              and respect for the craft
            </p>
          </div>
        </section>

        {/* Main About Content */}
        <section
          ref={sectionRef}
          className="coffeeMasterAboutContent py-20 lg:py-32 bg-gradient-to-br from-white via-amber-50 to-white"
        >
          <div className="coffeeMasterAboutContentContainer max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="coffeeMasterAboutGrid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Story Content */}
              <div
                className={`coffeeMasterStoryContent transform transition-all duration-1000 ${
                  aboutVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="coffeeMasterStoryBadge inline-block mb-6">
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 font-semibold rounded-full text-sm">
                    Est. 2020
                  </span>
                </div>

                <h2 className="coffeeMasterStoryTitle text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Rooted in Tradition, <br />
                  <span className="text-amber-600">Driven by Innovation</span>
                </h2>

                <div className="coffeeMasterStoryText space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Our journey began in the misty highlands of Guatemala, where
                    our founder first tasted coffee that changed everything.
                    This wasn't just another morning beverage—it was liquid
                    poetry, each sip telling the story of volcanic soil, careful
                    cultivation, and generations of farming wisdom. That
                    transformative moment sparked a mission to bring these
                    extraordinary flavors directly to coffee lovers everywhere.
                  </p>

                  <p>
                    Today, we work hand-in-hand with small-scale farmers across
                    Latin America and East Africa, ensuring they receive fair
                    compensation for their exceptional beans. Our master
                    roasters bring over 40 years of combined experience, using
                    precision timing and temperature control to unlock each
                    origin's unique character. Every batch is roasted in small
                    quantities and shipped within 48 hours, preserving the
                    complex flavors that make specialty coffee an art form.
                  </p>

                  <p>
                    What drives us isn't just creating remarkable coffee—it's
                    building a community where sustainability meets
                    satisfaction. From our carbon-neutral roasting facility to
                    our biodegradable packaging, we're proving that exceptional
                    quality and environmental responsibility go hand in hand.
                    When you choose CoffeeMaster, you're not just enjoying
                    superior coffee; you're supporting farming communities and
                    protecting the ecosystems that make this magic possible.
                  </p>
                </div>
              </div>

              {/* Visual Content */}
              <div
                className={`coffeeMasterStoryVisual transform transition-all duration-1000 delay-300 ${
                  aboutVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div >
                    <CoffeeMasterLogo
                      path="/images/coffee-master.png"
                    />
                </div>
                <div style={{margin:"10px"}} ></div>
                <div className="coffeeMasterImageGrid grid grid-cols-2 gap-4">
                  <div className="coffeeMasterGridItem space-y-4">
                    <div className="coffeeMasterImageCard aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl text-white">🌱</span>
                    </div>
                    <div className="coffeeMasterImageCard aspect-video bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl text-white">☕</span>
                    </div>
                  </div>
                  <div className="coffeeMasterGridItem space-y-4 pt-8">
                    <div className="coffeeMasterImageCard aspect-video bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl text-white">🏔️</span>
                    </div>
                    <div className="coffeeMasterImageCard aspect-square bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl text-white">🤝</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="coffeeMasterValues py-20 lg:py-32 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
          <div className="coffeeMasterValuesContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="coffeeMasterValuesHeader text-center mb-16">
              <h2 className="coffeeMasterValuesTitle text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="coffeeMasterValuesSubtitle text-lg text-amber-200 max-w-2xl mx-auto">
                Every decision we make is guided by these fundamental principles
              </p>
            </div>

            <div className="coffeeMasterValuesGrid grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quality Excellence */}
              <div
                className={`coffeeMasterValueCard group transform transition-all duration-700 ${
                  aboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="coffeeMasterCardInner bg-amber-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/50 group-hover:bg-amber-700/40 transition-all duration-300">
                  <div className="coffeeMasterValueIcon w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <h3 className="coffeeMasterValueTitle text-xl font-bold text-amber-200 mb-4">
                    Quality Excellence
                  </h3>
                  <p className="coffeeMasterValueDesc text-amber-100 leading-relaxed">
                    Precision roasting techniques and rigorous quality control
                    ensure every cup delivers the complex flavors and aromatic
                    richness that specialty coffee deserves.
                  </p>
                </div>
              </div>

              {/* Sustainable Sourcing */}
              <div
                className={`coffeeMasterValueCard group transform transition-all duration-700 ${
                  aboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="coffeeMasterCardInner bg-amber-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/50 group-hover:bg-amber-700/40 transition-all duration-300">
                  <div className="coffeeMasterValueIcon w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">🌱</span>
                  </div>
                  <h3 className="coffeeMasterValueTitle text-xl font-bold text-amber-200 mb-4">
                    Sustainable Impact
                  </h3>
                  <p className="coffeeMasterValueDesc text-amber-100 leading-relaxed">
                    Direct trade partnerships and eco-friendly practices support
                    farming communities while protecting the delicate ecosystems
                    where our coffee grows.
                  </p>
                </div>
              </div>

              {/* Customer Commitment */}
              <div
                className={`coffeeMasterValueCard group transform transition-all duration-700 ${
                  aboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="coffeeMasterCardInner bg-amber-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/50 group-hover:bg-amber-700/40 transition-all duration-300">
                  <div className="coffeeMasterValueIcon w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">❤️</span>
                  </div>
                  <h3 className="coffeeMasterValueTitle text-xl font-bold text-amber-200 mb-4">
                    Customer Devotion
                  </h3>
                  <p className="coffeeMasterValueDesc text-amber-100 leading-relaxed">
                    From personalized brewing guidance to responsive customer
                    service, we're dedicated to making your coffee experience
                    exceptional every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="coffeeMasterAboutCta py-20 bg-gradient-to-br from-white via-amber-50 to-white">
          <div className="coffeeMasterCtaContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="coffeeMasterCtaTitle text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="coffeeMasterCtaDesc text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of coffee enthusiasts who've discovered what
              happens when passion meets precision. Your perfect cup is waiting.
            </p>
            <div className="coffeeMasterCtaActions flex flex-col sm:flex-row gap-4 justify-center">
              <button className="coffeeMasterCtaBtn px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Explore Our Coffee
              </button>
              <button className="coffeeMasterCtaBtn px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Visit Our Roastery
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
