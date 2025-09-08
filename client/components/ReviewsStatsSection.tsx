import { useState, useEffect, useRef } from 'react';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
  icon: string;
  color: string;
}

export default function ReviewsStatsSection() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [currentStats, setCurrentStats] = useState({ reviews: 0, rating: 0, customers: 0, recommend: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    {
      id: 'reviews',
      value: 2847,
      label: 'Total Reviews',
      suffix: '+',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'rating',
      value: 4.9,
      label: 'Average Rating',
      suffix: '/5',
      icon: '⭐',
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 'customers',
      value: 12453,
      label: 'Happy Customers',
      suffix: '+',
      icon: '😊',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'recommend',
      value: 98,
      label: 'Would Recommend',
      suffix: '%',
      icon: '👍',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            setTimeout(() => setAnimatedStats(true), 500);
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

  useEffect(() => {
    if (animatedStats) {
      const duration = 2500;
      const frameRate = 60;
      const totalFrames = duration / (1000 / frameRate);
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        setCurrentStats({
          reviews: Math.round(stats[0].value * easeOutProgress),
          rating: Math.round((stats[1].value * easeOutProgress) * 10) / 10,
          customers: Math.round(stats[2].value * easeOutProgress),
          recommend: Math.round(stats[3].value * easeOutProgress)
        });

        if (frame >= totalFrames) {
          clearInterval(timer);
          setCurrentStats({
            reviews: stats[0].value,
            rating: stats[1].value,
            customers: stats[2].value,
            recommend: stats[3].value
          });
        }
      }, 1000 / frameRate);

      return () => clearInterval(timer);
    }
  }, [animatedStats, stats]);

  const getStatValue = (stat: Stat) => {
    switch (stat.id) {
      case 'reviews':
        return currentStats.reviews;
      case 'rating':
        return currentStats.rating;
      case 'customers':
        return currentStats.customers;
      case 'recommend':
        return currentStats.recommend;
      default:
        return 0;
    }
  };

  const formatNumber = (num: number, isRating: boolean = false) => {
    if (isRating) {
      return num.toFixed(1);
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="coffeeMasterReviewsStats py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="coffeeMasterStatsBg absolute inset-0">
        {/* Floating Numbers */}
        <div className="coffeeMasterFloatingNumbers absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="coffeeMasterFloatingNumber absolute text-amber-400/10 font-bold opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                fontSize: `${1 + Math.random() * 2}rem`,
              }}
            >
              {Math.floor(Math.random() * 5) + 1}★
            </div>
          ))}
        </div>

        {/* Background Pattern */}
        <div className="coffeeMasterStatsPattern absolute inset-0">
          <div className="coffeeMasterPattern1 absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="coffeeMasterPattern2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="coffeeMasterPattern3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-700/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="coffeeMasterStatsContainer relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterStatsHeader text-center mb-16 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterStatsTitle text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Coffee Lovers{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="coffeeMasterStatsSubtitle text-lg text-amber-200 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join thousands of satisfied customers who've discovered 
            their perfect cup and shared their experiences with our community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="coffeeMasterStatsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`coffeeMasterStatCard group text-center transform transition-all duration-1000 ${
                sectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="coffeeMasterStatCardInner bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105">
                {/* Icon */}
                <div className={`coffeeMasterStatIcon w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>

                {/* Number */}
                <div className="coffeeMasterStatNumber mb-4">
                  <span className={`text-4xl lg:text-5xl font-bold text-white group-hover:text-amber-200 transition-all duration-500 ${
                    animatedStats ? 'animate-pulse' : ''
                  }`}>
                    {stat.id === 'rating' 
                      ? formatNumber(getStatValue(stat), true)
                      : stat.id === 'customers' 
                        ? formatNumber(getStatValue(stat)).replace('K', '') + 'K'
                        : getStatValue(stat).toLocaleString()
                    }
                    <span className="text-amber-400">{stat.suffix}</span>
                  </span>
                </div>

                {/* Label */}
                <div className="coffeeMasterStatLabel">
                  <p className="text-lg font-semibold text-amber-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Additional Details */}
                <div className="coffeeMasterStatDetails mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className={`coffeeMasterRatingBreakdown bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 transform transition-all duration-1000 delay-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="coffeeMasterBreakdownTitle text-2xl lg:text-3xl font-bold text-white text-center mb-8">
            Rating Distribution
          </h3>
          
          <div className="coffeeMasterBreakdownContent grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="coffeeMasterOverallRating text-center">
              <div className="coffeeMasterOverallNumber text-6xl lg:text-7xl font-bold text-amber-400 mb-2">
                4.9
              </div>
              <div className="coffeeMasterOverallStars text-2xl text-amber-400 mb-4">
                ★★★★★
              </div>
              <p className="coffeeMasterOverallText text-amber-200 text-lg">
                Based on {currentStats.reviews.toLocaleString()}+ reviews
              </p>
            </div>

            {/* Rating Bars */}
            <div className="coffeeMasterRatingBars space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => {
                const percentage = rating === 5 ? 78 : rating === 4 ? 18 : rating === 3 ? 3 : rating === 2 ? 1 : 0;
                return (
                  <div key={rating} className="coffeeMasterRatingBar flex items-center">
                    <span className="coffeeMasterBarLabel text-amber-200 w-8 text-sm font-medium">{rating}★</span>
                    <div className="coffeeMasterBarContainer flex-1 mx-4 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`coffeeMasterBarFill h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 delay-1200 ${
                          sectionVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{ width: sectionVisible ? `${percentage}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="coffeeMasterBarPercentage text-amber-200 w-12 text-sm font-medium text-right">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`coffeeMasterTrustIndicators mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-1200 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterTrustCard text-center">
            <div className="coffeeMasterTrustIcon w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="coffeeMasterTrustTitle font-semibold text-white mb-2">Verified Reviews</h4>
            <p className="coffeeMasterTrustDesc text-amber-200 text-sm">All reviews are from verified customers</p>
          </div>

          <div className="coffeeMasterTrustCard text-center">
            <div className="coffeeMasterTrustIcon w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="coffeeMasterTrustTitle font-semibold text-white mb-2">Secure Platform</h4>
            <p className="coffeeMasterTrustDesc text-amber-200 text-sm">SSL encrypted and privacy protected</p>
          </div>

          <div className="coffeeMasterTrustCard text-center">
            <div className="coffeeMasterTrustIcon w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1 14H6L7 4z" />
              </svg>
            </div>
            <h4 className="coffeeMasterTrustTitle font-semibold text-white mb-2">Real Purchases</h4>
            <p className="coffeeMasterTrustDesc text-amber-200 text-sm">Reviews only from actual customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
