import { useState, useEffect, useRef } from "react";

interface CoffeeMasterStat {
  number: string;
  label: string;
  icon: string;
}

interface CoffeeGallery {
  img: string;
}

export default function StatsSection() {
  const [coffeeMasterStatsVisible, setCoffeeMasterStatsVisible] =
    useState(false);
  const [coffeeMasterAnimatedNumbers, setCoffeeMasterAnimatedNumbers] =
    useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const coffeeMasterStats: CoffeeMasterStat[] = [
    {
      number: "2536",
      label: "Happy Clients",
      icon: "😊",
    },
    {
      number: "7562",
      label: "Total Projects",
      icon: "📊",
    },
    {
      number: "2013",
      label: "Cups of Coffee",
      icon: "☕",
    },
    {
      number: "10536",
      label: "Total Submitted",
      icon: "📝",
    },
  ];
  const coffeeMasterGallery: CoffeeGallery[] = [
    { img: "/images/cappuccino.jpg" },
    { img: "/images/americano.jpg" },
    { img: "/images/espresso.jpg" },
    { img: "/images/macchiato.jpg" },
    { img: "/images/mocha.jpg" },
    { img: "/images/coffee-latte.jpg" },
    { img: "/images/piccolo-latte.jpg" },
    { img: "/images/ristretto.jpg" },
    { img: "/images/affogato.jpg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoffeeMasterStatsVisible(true);
            // Trigger number animation after a delay
            setTimeout(() => {
              setCoffeeMasterAnimatedNumbers(true);
            }, 500);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="coffeeMasterStats py-20 lg:py-32 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="coffeeMasterStatsBg absolute inset-0">
        <div className="coffeeMasterBgPattern opacity-10">
          <div className="coffeeMasterPattern1 absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent animate-pulse"></div>
          <div className="coffeeMasterPattern2 absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent animate-pulse delay-1000"></div>
          <div className="coffeeMasterPattern3 absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-300 to-transparent animate-pulse delay-500"></div>
          <div className="coffeeMasterPattern4 absolute top-1/2 right-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-300 to-transparent animate-pulse delay-1500"></div>
        </div>
      </div>

      <div className="coffeeMasterStatsContainer relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`coffeeMasterStatsHeader text-center mb-16 transform transition-all duration-1000 ${
            coffeeMasterStatsVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="coffeeMasterStatsTitle text-4xl lg:text-5xl font-bold text-white mb-6">
            What kind of Coffee we serve for you
          </h2>
          <p className="coffeeMasterStatsSubtitle text-lg text-amber-200 max-w-2xl mx-auto">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="coffeeMasterStatsGrid grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {coffeeMasterStats.map((stat, index) => (
            <div
              key={index}
              className={`coffeeMasterStatItem text-center transform transition-all duration-1000 ${
                coffeeMasterStatsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="coffeeMasterStatCard group cursor-pointer">
                {/* Icon */}
                <div className="coffeeMasterStatIcon w-20 h-20 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/50 group-hover:scale-110 transition-all duration-300 border border-amber-600/30">
                  <span className="text-3xl">{stat.icon}</span>
                </div>

                {/* Number */}
                <div className="coffeeMasterStatNumber mb-4">
                  <span
                    className={`text-4xl lg:text-5xl font-bold text-white group-hover:text-amber-200 transition-all duration-500 ${
                      coffeeMasterAnimatedNumbers ? "animate-pulse" : ""
                    }`}
                  >
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <div className="coffeeMasterStatLabel">
                  <p className="text-lg font-semibold text-amber-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="coffeeMasterStatHover absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/10 rounded-2xl transition-all duration-300 -m-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Preview */}
        <div
          className={`coffeeMasterGalleryPreview mt-20 transform transition-all duration-1000 delay-700 ${
            coffeeMasterStatsVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="coffeeMasterGalleryHeader text-center mb-12">
            <h3 className="coffeeMasterGalleryTitle text-3xl lg:text-4xl font-bold text-white mb-4">
              Coffee Gallery
            </h3>
            <p className="coffeeMasterGalleryDesc text-amber-200">
              Discover our beautiful coffee moments and artistry
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coffeeMasterGallery.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-700`}
              >
                <div
                  className="relative aspect-square bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${item.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/50 flex items-center justify-center">
                    <span className="text-4xl text-white opacity-60">☕</span>
                  </div>

                  {/* Eye Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(item.img)}
                    >
                      <svg
                        className="w-6 h-6 text-amber-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative">
                {/* X Icon */}
                <button
                  className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
                  onClick={() => setSelectedImage(null)}
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <img
                  src={selectedImage}
                  alt="Coffee"
                  className="max-h-[80vh] max-w-[80vw] rounded-lg shadow-2xl object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating decorations */}
      <div className="coffeeMasterStatsDecorations absolute inset-0 pointer-events-none">
        <div className="coffeeMasterDecorCoffee1 absolute top-20 left-20 text-amber-300/20 text-2xl animate-spin slow-spin">
          ☕
        </div>
        <div className="coffeeMasterDecorCoffee2 absolute bottom-20 right-20 text-amber-400/20 text-3xl animate-spin slow-spin reverse-spin">
          ☕
        </div>
        <div className="coffeeMasterDecorSteam1 absolute top-1/4 right-1/4 w-2 h-20 bg-gradient-to-t from-amber-300/20 to-transparent animate-pulse"></div>
        <div className="coffeeMasterDecorSteam2 absolute bottom-1/4 left-1/4 w-3 h-24 bg-gradient-to-t from-amber-400/20 to-transparent animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
