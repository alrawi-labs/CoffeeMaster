import { useState, useEffect, useRef  } from "react";

export default function HeroSection() {
  const [coffeeMasterHeroVisible, setCoffeeMasterHeroVisible] = useState(false);

  useEffect(() => {
    setCoffeeMasterHeroVisible(true);
  }, []);


 const frameContainerRef = useRef<HTMLDivElement>(null);
  const totalFrames = 85;
  const maxScroll = 680; // Hero yüksekliği
  const framesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const container = frameContainerRef.current;
    if (!container) return;

    // Frame img elementlerini oluştur
    const frames: HTMLImageElement[] = [];
    for (let i = totalFrames - 1; i >= 0; i--) {
      const img = new Image();
      img.src = `/images/frames/frame_${String(i).padStart(3,'0')}.png`;
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.opacity = i === 0 ? '1' : '0';
      container.appendChild(img);
      frames.push(img);
    }
    framesRef.current = frames;

    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY, maxScroll);
      const fraction = scrollY / maxScroll;
      const frameIndex = totalFrames - 1 - Math.floor(fraction * (totalFrames - 1));
      frames.forEach((img, idx) => img.style.opacity = idx === frameIndex ? '1' : '0');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <section className="coffeeMasterHero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="coffeeMasterHeroBg absolute inset-0">

        {/* Frame container */}
        <div
          ref={frameContainerRef} // useRef ile oluşturduğun container
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        ></div>

        <div className="coffeeMasterBgOverlay absolute inset-0 bg-gradient-to-br from-amber-900/80  z-10"></div>
        <div className="coffeeMasterBgPattern absolute inset-0 opacity-10">
          <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-40 h-40 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="coffeeMasterPattern3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Coffee beans floating animation */}
        <div className="coffeeMasterFloatingBeans absolute inset-0 pointer-events-none">
          <div className="coffeeMasterBean1 absolute top-20 left-20 text-amber-300 text-2xl animate-bounce delay-500">
            ☕
          </div>
          <div className="coffeeMasterBean2 absolute top-40 right-32 text-amber-400 text-xl animate-bounce delay-1000">
            ☕
          </div>
          <div className="coffeeMasterBean3 absolute bottom-32 left-32 text-amber-300 text-lg animate-bounce delay-1500">
            ☕
          </div>
          <div className="coffeeMasterBean4 absolute bottom-20 right-20 text-amber-400 text-2xl animate-bounce delay-2000">
            ☕
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="coffeeMasterHeroContent relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`coffeeMasterHeroInner transform transition-all duration-1000 ${
            coffeeMasterHeroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Subtitle */}
          <div
            className={`coffeeMasterHeroSubtitle mb-6 transform transition-all duration-1000 delay-300 ${
              coffeeMasterHeroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="coffeeMasterSubtitleText inline-block px-6 py-3 bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-200 font-medium text-lg">
              Now you can feel the energy
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`coffeeMasterHeroTitle text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transform transition-all duration-1000 delay-500 ${
              coffeeMasterHeroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Start your day with a{" "}
            <span className="coffeeMasterTitleHighlight bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent animate-pulse">
              black coffee
            </span>
          </h1>

          {/* CTA Button */}
          <div
            className={`coffeeMasterHeroCta transform transition-all duration-1000 delay-700 ${
              coffeeMasterHeroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="coffeeMasterCtaBtn group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden">
              <span className="coffeeMasterBtnText relative z-10">Buy Now</span>
              <div className="coffeeMasterBtnGlow absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="coffeeMasterBtnRipple absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            className={`coffeeMasterScrollIndicator absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              coffeeMasterHeroVisible
                ? "translate-y-36 opacity-100"
                : "translate-y-60 opacity-0"
            }`}
          >
            <div className="coffeeMasterScrollArrow flex flex-col items-center text-amber-200 animate-bounce">
              <span className="coffeeMasterScrollText text-sm mb-2">
                Scroll down
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="coffeeMasterHeroDecorations absolute inset-0 pointer-events-none">
        <div className="coffeeMasterDecor1 absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
        <div className="coffeeMasterDecor2 absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
