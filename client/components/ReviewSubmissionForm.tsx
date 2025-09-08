import { useState, useEffect, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  rating: number;
  coffeeType: string;
  testimonial: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  rating?: string;
  testimonial?: string;
}

export default function ReviewSubmissionForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    rating: 0,
    coffeeType: '',
    testimonial: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const coffeeTypes = [
    'Ethiopian Yirgacheffe',
    'Colombian Supremo',
    'House Blend Espresso',
    'Guatemala Antigua',
    'Kenya AA',
    'Signature Cold Brew',
    'Decaf Swiss Water',
    'CoffeeMaster Blend',
    'Italian Roast Espresso',
    'Other'
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.testimonial.trim()) {
      newErrors.testimonial = 'Review text is required';
    } else if (formData.testimonial.trim().length < 10) {
      newErrors.testimonial = 'Review must be at least 10 characters';
    } else if (formData.testimonial.trim().length > 500) {
      newErrors.testimonial = 'Review must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        rating: 0,
        coffeeType: '',
        testimonial: ''
      });
      setErrors({});
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      const isActive = starValue <= (hoveredStar || formData.rating);
      
      return (
        <button
          key={index}
          type="button"
          onClick={() => handleInputChange('rating', starValue)}
          onMouseEnter={() => setHoveredStar(starValue)}
          onMouseLeave={() => setHoveredStar(0)}
          className={`coffeeMasterRatingStar text-3xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded ${
            isActive ? 'text-amber-400' : 'text-gray-300'
          }`}
          aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
        >
          ★
        </button>
      );
    });
  };

  if (isSubmitted) {
    return (
      <section className="coffeeMasterReviewForm py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="coffeeMasterFormContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="coffeeMasterSuccessCard bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center border border-green-200">
            <div className="coffeeMasterSuccessIcon w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="coffeeMasterSuccessTitle text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Review!
            </h3>
            <p className="coffeeMasterSuccessDesc text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Your review has been submitted successfully and will be published after our team reviews it. 
              We truly appreciate your feedback and are delighted you enjoyed your CoffeeMaster experience!
            </p>
            <div className="coffeeMasterSuccessActions flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="coffeeMasterWriteAnotherBtn px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Write Another Review
              </button>
              <button 
                onClick={() => {
                  const reviewsGrid = document.querySelector('.coffeeMasterReviewsGrid');
                  reviewsGrid?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="coffeeMasterViewReviewsBtn px-6 py-3 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="coffeeMasterReviewForm py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="coffeeMasterFormContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterFormHeader text-center mb-12 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterFormTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Share Your Experience
          </h2>
          <p className="coffeeMasterFormSubtitle text-lg text-gray-600 max-w-3xl mx-auto">
            Help fellow coffee lovers discover their perfect cup by sharing your honest review. 
            Your feedback helps us continue delivering exceptional coffee experiences.
          </p>
        </div>

        {/* Review Form */}
        <div className={`coffeeMasterFormCard bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 transform transition-all duration-1000 delay-200 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <form onSubmit={handleSubmit} className="coffeeMasterForm space-y-8">
            {/* Personal Information */}
            <div className="coffeeMasterFormSection">
              <h3 className="coffeeMasterSectionTitle text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
              <div className="coffeeMasterFormGrid grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="coffeeMasterFormField">
                  <label htmlFor="name" className="coffeeMasterFieldLabel block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`coffeeMasterInput w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.name 
                        ? 'border-red-300 bg-red-50 focus:border-red-500' 
                        : 'border-gray-200 bg-white focus:border-amber-400 hover:border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="coffeeMasterFieldError text-red-600 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="coffeeMasterFormField">
                  <label htmlFor="email" className="coffeeMasterFieldLabel block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`coffeeMasterInput w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.email 
                        ? 'border-red-300 bg-red-50 focus:border-red-500' 
                        : 'border-gray-200 bg-white focus:border-amber-400 hover:border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="coffeeMasterFieldError text-red-600 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="coffeeMasterFormSection">
              <h3 className="coffeeMasterSectionTitle text-xl font-bold text-gray-900 mb-6">Your Rating</h3>
              <div className="coffeeMasterRatingContainer">
                <label className="coffeeMasterFieldLabel block text-sm font-semibold text-gray-700 mb-4">
                  Overall Rating *
                </label>
                <div className="coffeeMasterStarRating flex items-center space-x-1 mb-2">
                  {renderStars()}
                </div>
                <p className="coffeeMasterRatingHelper text-gray-500 text-sm mb-4">
                  {formData.rating === 0 ? 'Click to rate your experience' :
                   formData.rating === 1 ? 'Poor' :
                   formData.rating === 2 ? 'Fair' :
                   formData.rating === 3 ? 'Good' :
                   formData.rating === 4 ? 'Very Good' :
                   'Excellent'}
                </p>
                {errors.rating && (
                  <p className="coffeeMasterFieldError text-red-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.rating}
                  </p>
                )}
              </div>
            </div>

            {/* Coffee Type */}
            <div className="coffeeMasterFormSection">
              <label htmlFor="coffeeType" className="coffeeMasterFieldLabel block text-sm font-semibold text-gray-700 mb-2">
                Coffee Type (Optional)
              </label>
              <select
                id="coffeeType"
                value={formData.coffeeType}
                onChange={(e) => handleInputChange('coffeeType', e.target.value)}
                className="coffeeMasterSelect w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 hover:border-gray-300"
                disabled={isSubmitting}
              >
                <option value="">Select the coffee you're reviewing</option>
                {coffeeTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Review Text */}
            <div className="coffeeMasterFormSection">
              <label htmlFor="testimonial" className="coffeeMasterFieldLabel block text-sm font-semibold text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                id="testimonial"
                rows={6}
                value={formData.testimonial}
                onChange={(e) => handleInputChange('testimonial', e.target.value)}
                className={`coffeeMasterTextarea w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                  errors.testimonial 
                    ? 'border-red-300 bg-red-50 focus:border-red-500' 
                    : 'border-gray-200 bg-white focus:border-amber-400 hover:border-gray-300'
                }`}
                placeholder="Share your experience with our coffee. What did you love most about it? How was the taste, aroma, and overall quality?"
                disabled={isSubmitting}
                maxLength={500}
              />
              <div className="coffeeMasterCharCounter flex justify-between items-center mt-2">
                <div>
                  {errors.testimonial && (
                    <p className="coffeeMasterFieldError text-red-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.testimonial}
                    </p>
                  )}
                </div>
                <span className="coffeeMasterCharCount text-gray-500 text-sm">
                  {formData.testimonial.length}/500
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="coffeeMasterFormSubmit">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`coffeeMasterSubmitBtn w-full py-4 px-8 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="coffeeMasterSubmitLoading flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Submitting Your Review...
                  </div>
                ) : (
                  <div className="coffeeMasterSubmitText flex items-center justify-center">
                    Submit Review
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
