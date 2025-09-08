import { useState, useEffect, useRef } from 'react';

interface CustomerReview {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  date: string;
  testimonial: string;
  coffeeType: string;
  verified: boolean;
  helpful: number;
}

export default function ReviewsGridSection() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const reviewsPerPage = 6;

  const reviews: CustomerReview[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "👩‍💼",
      location: "San Francisco, CA",
      rating: 5,
      date: "2 days ago",
      testimonial: "Absolutely phenomenal coffee! The Ethiopian Yirgacheffe has the most amazing floral notes I've ever tasted. The packaging arrived fresh and the customer service was outstanding. Will definitely be ordering again!",
      coffeeType: "Ethiopian Yirgacheffe",
      verified: true,
      helpful: 23
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "👨‍🍳",
      location: "New York, NY",
      rating: 5,
      date: "1 week ago",
      testimonial: "As a professional barista, I'm very particular about my coffee beans. CoffeeMaster's House Blend Espresso delivers consistent results every time. Perfect crema, balanced flavor, and excellent value for money.",
      coffeeType: "House Blend Espresso",
      verified: true,
      helpful: 31
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "👩‍🎨",
      location: "Austin, TX",
      rating: 5,
      date: "3 days ago",
      testimonial: "I love supporting sustainable coffee companies, and CoffeeMaster goes above and beyond. The Colombian Supremo is rich and smooth, and knowing it's ethically sourced makes it taste even better!",
      coffeeType: "Colombian Supremo",
      verified: true,
      helpful: 18
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "👨‍💻",
      location: "Seattle, WA",
      rating: 4,
      date: "5 days ago",
      testimonial: "Great coffee for my daily routine. The cold brew concentrate is perfect for busy mornings - just add water and I'm ready to go. Smooth taste and good caffeine kick without the bitterness.",
      coffeeType: "Signature Cold Brew",
      verified: true,
      helpful: 15
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "👩‍🌾",
      location: "Portland, OR",
      rating: 5,
      date: "1 week ago",
      testimonial: "The subscription service is fantastic! Fresh coffee delivered right to my door every month. The Guatemala Antigua has become my new favorite - smoky, complex, and perfect for my French press.",
      coffeeType: "Guatemala Antigua",
      verified: true,
      helpful: 27
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "👨‍🚀",
      location: "Chicago, IL",
      rating: 5,
      date: "2 weeks ago",
      testimonial: "Switched to CoffeeMaster after trying several other brands. The difference in quality is immediately noticeable. Even their decaf maintains incredible flavor - something I thought was impossible!",
      coffeeType: "Decaf Swiss Water",
      verified: true,
      helpful: 22
    },
    {
      id: 7,
      name: "Maria Garcia",
      avatar: "👩‍⚕️",
      location: "Miami, FL",
      rating: 5,
      date: "4 days ago",
      testimonial: "The Kenya AA is absolutely divine! Bright, wine-like acidity with beautiful complexity. As a coffee enthusiast, I appreciate the detailed tasting notes and brewing recommendations.",
      coffeeType: "Kenya AA",
      verified: true,
      helpful: 19
    },
    {
      id: 8,
      name: "Robert Brown",
      avatar: "👨‍🏫",
      location: "Boston, MA",
      rating: 4,
      date: "1 week ago",
      testimonial: "Excellent quality and fast shipping. The CoffeeMaster Blend has become our household staple. Great for both espresso and pour-over methods. Consistent quality batch after batch.",
      coffeeType: "CoffeeMaster Blend",
      verified: true,
      helpful: 16
    },
    {
      id: 9,
      name: "Jennifer Lee",
      avatar: "👩‍🔬",
      location: "Denver, CO",
      rating: 5,
      date: "6 days ago",
      testimonial: "The packaging is beautiful and sustainable, which I appreciate. But most importantly, the Italian Roast Espresso is incredibly bold and rich - perfect for my morning cortado ritual.",
      coffeeType: "Italian Roast Espresso",
      verified: true,
      helpful: 14
    }
  ];

  const filters = ['all', '5-star', '4-star', 'verified', 'recent'];

  const filteredReviews = reviews.filter(review => {
    switch (selectedFilter) {
      case '5-star':
        return review.rating === 5;
      case '4-star':
        return review.rating === 4;
      case 'verified':
        return review.verified;
      case 'recent':
        return ['2 days ago', '3 days ago', '4 days ago', '5 days ago', '6 days ago'].includes(review.date);
      default:
        return true;
    }
  });

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const currentReviews = filteredReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`coffeeMasterStar text-lg ${
          index < rating ? 'text-amber-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(0);
  };

  return (
    <section ref={sectionRef} className="coffeeMasterReviewsGrid py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="coffeeMasterReviewsContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterReviewsHeader text-center mb-16 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterReviewsTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="coffeeMasterReviewsSubtitle text-lg text-gray-600 max-w-3xl mx-auto">
            Authentic reviews from real coffee lovers. Every testimonial represents a genuine experience 
            with our carefully crafted coffee blends and exceptional service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`coffeeMasterReviewsFilters flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`coffeeMasterFilterTab px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400 hover:text-amber-600 shadow-md'
              }`}
            >
              {filter === 'all' ? 'All Reviews' : 
               filter === '5-star' ? '5 Star Reviews' :
               filter === '4-star' ? '4 Star Reviews' :
               filter === 'verified' ? 'Verified Only' :
               'Recent Reviews'}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="coffeeMasterReviewsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentReviews.map((review, index) => (
            <div
              key={review.id}
              className={`coffeeMasterReviewCard group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-200 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-105 ${
                sectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="coffeeMasterCardHeader p-6 pb-4">
                <div className="coffeeMasterReviewerInfo flex items-center mb-4">
                  <div className="coffeeMasterReviewerAvatar w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {review.avatar}
                  </div>
                  <div className="coffeeMasterReviewerDetails flex-1">
                    <div className="coffeeMasterReviewerName flex items-center">
                      <h4 className="font-bold text-gray-900 mr-2">{review.name}</h4>
                      {review.verified && (
                        <div className="coffeeMasterVerifiedBadge bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          ✓ Verified
                        </div>
                      )}
                    </div>
                    <p className="coffeeMasterReviewerLocation text-gray-600 text-sm">{review.location}</p>
                  </div>
                </div>

                {/* Rating and Date */}
                <div className="coffeeMasterReviewMeta flex items-center justify-between mb-4">
                  <div className="coffeeMasterReviewRating flex items-center">
                    {renderStars(review.rating)}
                    <span className="coffeeMasterRatingNumber ml-2 font-semibold text-gray-700">{review.rating}.0</span>
                  </div>
                  <div className="coffeeMasterReviewDate text-gray-500 text-sm">{review.date}</div>
                </div>

                {/* Coffee Type */}
                <div className="coffeeMasterCoffeeType mb-4">
                  <span className="coffeeMasterCoffeeLabel text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                    {review.coffeeType}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="coffeeMasterCardBody px-6 pb-6">
                <blockquote className="coffeeMasterReviewText text-gray-700 leading-relaxed mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  "{review.testimonial}"
                </blockquote>

                {/* Helpful Counter */}
                <div className="coffeeMasterReviewActions flex items-center justify-between">
                  <button className="coffeeMasterHelpfulBtn flex items-center text-gray-500 hover:text-amber-600 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>

                  <button className="coffeeMasterShareBtn text-gray-400 hover:text-amber-600 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="coffeeMasterHoverOverlay absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`coffeeMasterReviewsPagination flex justify-center items-center space-x-2 transform transition-all duration-1000 delay-600 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="coffeeMasterPaginationBtn p-2 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`coffeeMasterPageBtn w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-amber-400 hover:bg-amber-50'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="coffeeMasterPaginationBtn p-2 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
