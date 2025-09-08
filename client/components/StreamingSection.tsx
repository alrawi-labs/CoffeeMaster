import { useState, useEffect, useRef } from 'react';

export default function StreamingSection() {
  const [coffeeMasterStreamVisible, setCoffeeMasterStreamVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoffeeMasterStreamVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="coffeeMasterStreaming py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="coffeeMasterStreamContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="coffeeMasterStreamGrid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`coffeeMasterStreamContent transform transition-all duration-1000 ${
            coffeeMasterStreamVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}>
            <div className="coffeeMasterStreamBadge inline-block mb-6">
              <span className="coffeeMasterBadgeText px-4 py-2 bg-amber-100 text-amber-800 font-semibold rounded-full text-sm">
                Live coffee making process.
              </span>
            </div>
            
            <h2 className="coffeeMasterStreamTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Stream Our <br />
              <span className="coffeeMasterTitleAccent bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Coffee Making Live
              </span>
            </h2>
            
            <p className="coffeeMasterStreamDesc text-lg text-gray-600 mb-8 leading-relaxed">
              We are here to listen from you deliver excellence
            </p>
            
            <p className="coffeeMasterStreamText text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim.
            </p>

            <button className="coffeeMasterStreamBtn group inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Live Stream
            </button>
          </div>

          {/* Visual */}
          <div className={`coffeeMasterStreamVisual transform transition-all duration-1000 delay-300 ${
            coffeeMasterStreamVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-10 opacity-0'
          }`}>
            <div className="coffeeMasterStreamCard relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Mock video player */}
              <div className="coffeeMasterVideoPlayer relative aspect-video bg-gradient-to-br from-amber-800 to-amber-900 flex items-center justify-center">
                <div className="coffeeMasterPlayOverlay absolute inset-0 bg-black/20"></div>
                <div className="coffeeMasterPlayButton relative z-10 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group cursor-pointer hover:bg-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-8 h-8 text-amber-800 ml-1 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Live indicator */}
                <div className="coffeeMasterLiveIndicator absolute top-4 left-4 flex items-center space-x-2">
                  <div className="coffeeMasterLiveDot w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="coffeeMasterLiveText text-white font-semibold text-sm">LIVE</span>
                </div>

                {/* Viewer count */}
                <div className="coffeeMasterViewerCount absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="coffeeMasterViewers text-white text-sm">👁 1,234 watching</span>
                </div>
              </div>

              {/* Mock chat/comments */}
              <div className="coffeeMasterStreamChat p-6">
                <h4 className="coffeeMasterChatTitle font-semibold text-gray-900 mb-4">Live Comments</h4>
                <div className="coffeeMasterChatMessages space-y-3">
                  <div className="coffeeMasterChatMessage flex items-start space-x-3">
                    <div className="coffeeMasterUserAvatar w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                      <span className="text-amber-800 text-sm font-bold">J</span>
                    </div>
                    <div className="coffeeMasterMessageContent">
                      <p className="coffeeMasterMessageText text-sm text-gray-700">Amazing coffee technique! ☕</p>
                    </div>
                  </div>
                  <div className="coffeeMasterChatMessage flex items-start space-x-3">
                    <div className="coffeeMasterUserAvatar w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                      <span className="text-amber-900 text-sm font-bold">M</span>
                    </div>
                    <div className="coffeeMasterMessageContent">
                      <p className="coffeeMasterMessageText text-sm text-gray-700">Love the aroma! 🤤</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorations */}
            <div className="coffeeMasterStreamDecorations absolute inset-0 pointer-events-none">
              <div className="coffeeMasterDecorSteam absolute -top-4 -right-4 w-16 h-16 bg-amber-200 rounded-full opacity-20 animate-ping"></div>
              <div className="coffeeMasterDecorBean absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
