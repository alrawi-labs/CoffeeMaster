import { useState, useEffect, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  coffeeType: string;
}

export default function CustomerReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      comment: "The Ethiopian Yirgacheffe is absolutely incredible! The floral notes and bright acidity make it perfect for my morning pour-over. CoffeeMaster has completely changed my coffee experience.",
      avatar: "👩‍💻",
      date: "2 weeks ago",
      coffeeType: "Ethiopian Yirgacheffe"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "New York, NY",
      rating: 5,
      comment: "I've been ordering the House Blend Espresso for months now. The consistency is remarkable, and the flavor profile is perfect for both espresso shots and cappuccinos. Outstanding quality!",
      avatar: "👨‍🍳",
      date: "1 month ago",
      coffeeType: "House Blend Espresso"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Austin, TX",
      rating: 5,
      comment: "The packaging arrived so fresh, you could smell the coffee before opening it! The Colombian Supremo has the perfect balance of sweetness and body. Will definitely reorder.",
      avatar: "👩‍🎨",
      date: "3 days ago",
      coffeeType: "Colombian Supremo"
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seattle, WA",
      rating: 5,
      comment: "As someone who takes coffee seriously, I'm impressed by the quality and attention to detail. The roast dates are always recent, and the flavor notes are exactly as described.",
      avatar: "��‍💼",
      date: "1 week ago",
      coffeeType: "Kenya AA"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Portland, OR",
      rating: 4,
      comment: "Love the sustainability focus! Knowing that my coffee purchase supports farming communities makes each cup even more enjoyable. The Guatemala Antigua is my favorite so far.",
      avatar: "👩‍🌾",
      date: "2 months ago",
      coffeeType: "Guatemala Antigua"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Chicago, IL",
      rating: 5,
      comment: "The cold brew concentrate is a game-changer for summer! Smooth, rich, and naturally sweet. I've tried many brands, but this one stands out from the rest.",
      avatar: "👨‍🚀",
      date: "1 month ago",
      coffeeType: "Signature Cold Brew"
    }
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoPlay, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`coffeeMasterStar text-xl ${
          index < rating ? 'text-amber-400' : 'text-gray-400'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="coffeeMasterReviewsSection py-20 lg:py-32 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="coffeeMasterReviewsContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterReviewsHeader text-center mb-16 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterReviewsTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Coffee Lovers Say
          </h2>
          <p className="coffeeMasterReviewsSubtitle text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have discovered their perfect cup. 
            Read authentic reviews from fellow coffee enthusiasts.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className={`coffeeMasterReviewsCarousel relative transform transition-all duration-1000 delay-300 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div 
            className="coffeeMasterCarouselContainer"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Main Review Display */}
            <div className="coffeeMasterMainReview relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 mx-auto max-w-4xl">
              {/* Quote Icon */}
              <div className="coffeeMasterQuoteIcon absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">"</span>
              </div>

              {/* Review Content */}
              <div className="coffeeMasterReviewContent">
                {/* Customer Info */}
                <div className="coffeeMasterCustomerInfo flex items-center mb-8">
                  <div className="coffeeMasterCustomerAvatar w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center text-2xl mr-6 shadow-lg">
                    {reviews[currentReview].avatar}
                  </div>
                  <div className="coffeeMasterCustomerDetails">
                    <h4 className="coffeeMasterCustomerName text-xl font-bold text-gray-900">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="coffeeMasterCustomerLocation text-gray-600">
                      {reviews[currentReview].location}
                    </p>
                    <div className="coffeeMasterCustomerRating flex items-center mt-1">
                      {renderStars(reviews[currentReview].rating)}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="coffeeMasterReviewText text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                  "{reviews[currentReview].comment}"
                </blockquote>

                {/* Review Meta */}
                <div className="coffeeMasterReviewMeta flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-500">
                  <div className="coffeeMasterCoffeeType mb-2 sm:mb-0">
                    <span className="coffeeMasterCoffeeLabel font-medium">Coffee: </span>
                    <span className="coffeeMasterCoffeeValue text-amber-600 font-semibold">
                      {reviews[currentReview].coffeeType}
                    </span>
                  </div>
                  <div className="coffeeMasterReviewDate">
                    {reviews[currentReview].date}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevReview}
                className="coffeeMasterPrevBtn absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextReview}
                className="coffeeMasterNextBtn absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Review Indicators */}
            <div className="coffeeMasterReviewIndicators flex justify-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`coffeeMasterIndicator w-3 h-3 rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? 'bg-amber-500 scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-amber-300 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Reviews */}
          <div className="coffeeMasterThumbnailReviews mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className={`coffeeMasterThumbnailReview cursor-pointer bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1 ${
                  currentReview === index ? 'ring-2 ring-amber-400 bg-amber-50' : ''
                }`}
                onClick={() => goToReview(index)}
              >
                <div className="coffeeMasterThumbnailHeader flex items-center mb-4">
                  <div className="coffeeMasterThumbnailAvatar w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center text-lg mr-3">
                    {review.avatar}
                  </div>
                  <div>
                    <h5 className="coffeeMasterThumbnailName font-semibold text-gray-900">
                      {review.name}
                    </h5>
                    <div className="coffeeMasterThumbnailRating flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="coffeeMasterThumbnailComment text-gray-600 text-sm leading-relaxed line-clamp-3">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Rating Summary */}
        <div className={`coffeeMasterRatingSummary mt-16 text-center transform transition-all duration-1000 delay-500 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterSummaryCard bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="coffeeMasterSummaryContent flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="coffeeMasterOverallRating text-center">
                <div className="coffeeMasterRatingNumber text-5xl lg:text-6xl font-bold mb-2">4.8</div>
                <div className="coffeeMasterRatingStars flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="coffeeMasterRatingLabel text-amber-200">Overall Rating</p>
              </div>
              <div className="coffeeMasterSummaryText text-center lg:text-left max-w-2xl">
                <h3 className="coffeeMasterSummaryTitle text-2xl lg:text-3xl font-bold mb-4">
                  Trusted by Coffee Lovers Worldwide
                </h3>
                <p className="coffeeMasterSummaryDesc text-amber-100 leading-relaxed">
                  Over 10,000+ satisfied customers have rated our coffee 4.8/5 stars. 
                  Join our community and discover why CoffeeMaster is the preferred choice 
                  for discerning coffee enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
