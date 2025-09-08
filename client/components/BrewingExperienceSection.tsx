import { useState, useEffect, useRef } from 'react';

interface BrewingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  detail: string;
}

export default function BrewingExperienceSection() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [animatedCounters, setAnimatedCounters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState({ farms: 0, countries: 0, years: 0, satisfaction: 0 });

  const brewingSteps: BrewingStep[] = [
    {
      id: 1,
      title: "Sourcing Excellence",
      description: "Direct partnerships with sustainable farms",
      icon: "🌱",
      detail: "We work directly with coffee farmers in over 15 countries, ensuring fair wages and sustainable farming practices that protect both the environment and local communities."
    },
    {
      id: 2,
      title: "Expert Selection",
      description: "Hand-picked by our master coffee tasters",
      icon: "👃",
      detail: "Our certified Q-graders evaluate thousands of coffee samples annually, selecting only the top 2% that meet our strict quality standards for flavor, aroma, and overall excellence."
    },
    {
      id: 3,
      title: "Precision Roasting",
      description: "Small-batch roasting for optimal flavor",
      icon: "🔥",
      detail: "Using state-of-the-art roasting equipment and decades of expertise, we carefully develop each coffee's unique flavor profile through precise temperature and timing control."
    },
    {
      id: 4,
      title: "Fresh Delivery",
      description: "Roasted and shipped within 48 hours",
      icon: "📦",
      detail: "Your coffee is roasted to order and shipped immediately in our custom packaging designed to preserve freshness and protect the beans during transit."
    }
  ];

  const finalCounters = { farms: 127, countries: 15, years: 8, satisfaction: 98 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            setTimeout(() => setAnimatedCounters(true), 800);
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

  useEffect(() => {
    if (animatedCounters) {
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = duration / (1000 / frameRate);
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          farms: Math.round(finalCounters.farms * easeOutProgress),
          countries: Math.round(finalCounters.countries * easeOutProgress),
          years: Math.round(finalCounters.years * easeOutProgress),
          satisfaction: Math.round(finalCounters.satisfaction * easeOutProgress)
        });

        if (frame >= totalFrames) {
          clearInterval(timer);
          setCounters(finalCounters);
        }
      }, 1000 / frameRate);

      return () => clearInterval(timer);
    }
  }, [animatedCounters]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % brewingSteps.length);
    }, 4000);

    return () => clearInterval(stepTimer);
  }, []);

  return (
    <section ref={sectionRef} className="coffeeMasterBrewingSection py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="coffeeMasterBrewingBg absolute inset-0">
        {/* Steam Animation */}
        <div className="coffeeMasterBrewingSteam absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="coffeeMasterSteamLine absolute w-1 h-20 bg-gradient-to-t from-amber-300/20 to-transparent animate-coffee-steam"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Coffee Beans Falling */}
        <div className="coffeeMasterFallingBeans absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="coffeeMasterFallingBean absolute w-3 h-3 bg-amber-600 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="coffeeMasterBrewingContainer relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterBrewingHeader text-center mb-20 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterBrewingTitle text-4xl lg:text-5xl font-bold text-white mb-6">
            From Bean to Cup:<br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Our Coffee Journey
            </span>
          </h2>
          <p className="coffeeMasterBrewingSubtitle text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
            Every cup tells a story of dedication, sustainability, and craftsmanship. 
            Discover how we transform the finest coffee beans into extraordinary experiences.
          </p>
        </div>

        {/* Brewing Process Steps */}
        <div className="coffeeMasterBrewingSteps grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visual Timeline */}
          <div className={`coffeeMasterBrewingVisual transform transition-all duration-1000 delay-300 ${
            sectionVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="coffeeMasterTimelineContainer relative">
              {/* Central Coffee Cup */}
              <div className="coffeeMasterCentralCup absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-3xl text-white">☕</span>
              </div>

              {/* Step Circles */}
              {brewingSteps.map((step, index) => {
                const angle = (index * 90) - 45; // Distribute in 4 quadrants
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={step.id}
                    className={`coffeeMasterStepCircle absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                      activeStep === index
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 scale-125 shadow-2xl'
                        : 'bg-amber-800/50 backdrop-blur-sm hover:bg-amber-700/70 hover:scale-110'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="text-xl">{step.icon}</span>
                  </div>
                );
              })}

              {/* Connecting Lines */}
              <svg className="coffeeMasterConnectionLines absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {brewingSteps.map((_, index) => {
                  const currentAngle = (index * 90) - 45;
                  const nextAngle = (((index + 1) % brewingSteps.length) * 90) - 45;
                  const radius = 120;
                  
                  const x1 = 50 + (Math.cos((currentAngle * Math.PI) / 180) * radius) / 3;
                  const y1 = 50 + (Math.sin((currentAngle * Math.PI) / 180) * radius) / 3;
                  const x2 = 50 + (Math.cos((nextAngle * Math.PI) / 180) * radius) / 3;
                  const y2 = 50 + (Math.sin((nextAngle * Math.PI) / 180) * radius) / 3;

                  return (
                    <line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(245, 158, 11, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Step Details */}
          <div className={`coffeeMasterStepDetails transform transition-all duration-1000 delay-500 ${
            sectionVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="coffeeMasterActiveStep bg-amber-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/50">
              <div className="coffeeMasterStepHeader flex items-center mb-6">
                <div className="coffeeMasterStepIcon w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">{brewingSteps[activeStep].icon}</span>
                </div>
                <div>
                  <h3 className="coffeeMasterStepTitle text-2xl font-bold text-amber-200">
                    {brewingSteps[activeStep].title}
                  </h3>
                  <p className="coffeeMasterStepSubtitle text-amber-300 font-medium">
                    {brewingSteps[activeStep].description}
                  </p>
                </div>
              </div>
              <p className="coffeeMasterStepDetail text-amber-100 leading-relaxed text-lg">
                {brewingSteps[activeStep].detail}
              </p>
            </div>

            {/* Step Navigation */}
            <div className="coffeeMasterStepNav flex justify-center mt-8 space-x-2">
              {brewingSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`coffeeMasterNavDot w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-amber-400 scale-125'
                      : 'bg-amber-700/50 hover:bg-amber-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Counter */}
        <div className={`coffeeMasterBrewingStats grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-700 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterStatItem text-center">
            <div className="coffeeMasterStatNumber text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
              {counters.farms}+
            </div>
            <p className="coffeeMasterStatLabel text-amber-200 font-medium">Partner Farms</p>
          </div>
          <div className="coffeeMasterStatItem text-center">
            <div className="coffeeMasterStatNumber text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
              {counters.countries}
            </div>
            <p className="coffeeMasterStatLabel text-amber-200 font-medium">Countries</p>
          </div>
          <div className="coffeeMasterStatItem text-center">
            <div className="coffeeMasterStatNumber text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
              {counters.years}+
            </div>
            <p className="coffeeMasterStatLabel text-amber-200 font-medium">Years Experience</p>
          </div>
          <div className="coffeeMasterStatItem text-center">
            <div className="coffeeMasterStatNumber text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
              {counters.satisfaction}%
            </div>
            <p className="coffeeMasterStatLabel text-amber-200 font-medium">Satisfaction</p>
          </div>
        </div>

        {/* Sustainability Message */}
        <div className={`coffeeMasterSustainability mt-20 text-center transform transition-all duration-1000 delay-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterSustainabilityCard bg-gradient-to-r from-green-800/30 to-amber-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-green-700/30">
            <div className="coffeeMasterSustainabilityIcon w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🌍</span>
            </div>
            <h3 className="coffeeMasterSustainabilityTitle text-2xl lg:text-3xl font-bold text-white mb-4">
              Committed to Sustainability
            </h3>
            <p className="coffeeMasterSustainabilityDesc text-green-200 leading-relaxed max-w-3xl mx-auto">
              Every purchase supports regenerative farming practices, fair trade partnerships, 
              and carbon-neutral shipping. Together, we're building a more sustainable future 
              for coffee communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
