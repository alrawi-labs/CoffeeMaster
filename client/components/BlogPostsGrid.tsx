import { useState, useEffect, useRef } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
  tags: string[];
}

export default function BlogPostsGrid() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const postsPerPage = 6;

  const categories = ['all', 'coffee-tips', 'recipes', 'sustainability', 'news', 'origin-stories'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Perfect Pour-Over: A Step-by-Step Guide to Brewing Excellence",
      excerpt: "Master the art of pour-over coffee with our comprehensive guide. From water temperature to pouring technique, discover the secrets that transform ordinary beans into extraordinary experiences.",
      author: "Maria Santos",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "coffee-tips",
      featured: true,
      image: "☕",
      tags: ["brewing", "pour-over", "technique"]
    },
    {
      id: 2,
      title: "Ethiopian Coffee: Tracing the Origins of Our Beloved Bean",
      excerpt: "Journey to the birthplace of coffee and explore the rich heritage of Ethiopian coffee culture. Learn about the unique varietals and traditional ceremonies that have shaped coffee history.",
      author: "David Chen",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "origin-stories",
      featured: true,
      image: "🌍",
      tags: ["ethiopia", "origins", "culture"]
    },
    {
      id: 3,
      title: "5 Delicious Coffee Cocktails to Warm Your Winter Evenings",
      excerpt: "Elevate your evening routine with these creative coffee cocktail recipes. From classic Irish coffee to innovative espresso martinis, discover new ways to enjoy your favorite brew.",
      author: "Isabella Rodriguez",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "recipes",
      featured: false,
      image: "🍸",
      tags: ["cocktails", "recipes", "winter"]
    },
    {
      id: 4,
      title: "Sustainable Coffee: How Your Daily Cup Can Make a Difference",
      excerpt: "Explore the environmental impact of coffee production and discover how choosing sustainable options can protect ecosystems while supporting farming communities worldwide.",
      author: "Dr. James Wilson",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "sustainability",
      featured: true,
      image: "🌱",
      tags: ["sustainability", "environment", "fair-trade"]
    },
    {
      id: 5,
      title: "Cold Brew vs. Iced Coffee: Understanding the Difference",
      excerpt: "Settle the debate once and for all. Learn about the brewing methods, flavor profiles, and best use cases for both cold brew and iced coffee to make the perfect summer drink.",
      author: "Alex Thompson",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "coffee-tips",
      featured: false,
      image: "🧊",
      tags: ["cold-brew", "iced-coffee", "summer"]
    },
    {
      id: 6,
      title: "CoffeeMaster Wins Sustainability Award for 2025",
      excerpt: "We're honored to receive the Green Coffee Excellence Award for our commitment to sustainable sourcing and environmental stewardship. Learn about our journey and future initiatives.",
      author: "Yasir Alrawi",
      date: "2025-08-26",
      readTime: "5 min read",
      category: "news",
      featured: false,
      image: "🏆",
      tags: ["award", "sustainability", "company-news"]
    },
    {
      id: 7,
      title: "The Science Behind Coffee Roasting: From Green to Golden",
      excerpt: "Dive deep into the chemical transformations that occur during coffee roasting. Understand how time, temperature, and technique create the complex flavors in your morning cup.",
      author: "Dr. Sarah Kim",
      date: "2025-01-01",
      readTime: "15 min read",
      category: "coffee-tips",
      featured: true,
      image: "🔬",
      tags: ["roasting", "science", "flavor"]
    },
    {
      id: 8,
      title: "Colombian Coffee Farmers: Stories from the Mountains",
      excerpt: "Meet the dedicated farmers behind our Colombian beans. Discover their traditional methods, challenges, and the passion that drives them to produce exceptional coffee year after year.",
      author: "Elena Gutierrez",
      date: "2023-12-28",
      readTime: "11 min read",
      category: "origin-stories",
      featured: false,
      image: "⛰️",
      tags: ["colombia", "farmers", "community"]
    },
    {
      id: 9,
      title: "Holiday Spiced Latte Recipe: Bringing Warmth to Winter",
      excerpt: "Create the perfect holiday drink at home with our signature spiced latte recipe. Featuring cinnamon, nutmeg, and a touch of vanilla for that festive flavor.",
      author: "Chef Michael Brown",
      date: "2023-12-25",
      readTime: "4 min read",
      category: "recipes",
      featured: false,
      image: "🎄",
      tags: ["holiday", "latte", "spices"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'all': 'All Posts',
      'coffee-tips': 'Coffee Tips',
      'recipes': 'Recipes',
      'sustainability': 'Sustainability',
      'news': 'News',
      'origin-stories': 'Origin Stories'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <section ref={sectionRef} className="coffeeMasterBlogGrid py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="coffeeMasterBlogContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterBlogHeader text-center mb-16 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterBlogTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Coffee Stories
          </h2>
          <p className="coffeeMasterBlogSubtitle text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into our collection of carefully crafted articles about coffee culture, brewing techniques, 
            sustainability practices, and the stories behind every cup.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`coffeeMasterBlogFilters mb-12 transform transition-all duration-1000 delay-200 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterFilterWrapper flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`coffeeMasterFilterBtn px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400 hover:text-amber-600 shadow-md'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="coffeeMasterPostsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
              className={`coffeeMasterBlogPost group cursor-pointer transform transition-all duration-700 ${
                sectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } ${post.featured ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="coffeeMasterPostCard bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-200 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-105">
                {/* Featured Badge */}
                {post.featured && (
                  <div className="coffeeMasterFeaturedBadge absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                {/* Post Image */}
                <div className="coffeeMasterPostImage relative aspect-video bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 overflow-hidden">
                  <div className="coffeeMasterImagePlaceholder absolute inset-0 bg-gradient-to-br from-amber-600/30 to-amber-800/30 flex items-center justify-center">
                    <span className="text-6xl text-white opacity-60">{post.image}</span>
                  </div>
                  <div className="coffeeMasterImageOverlay absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="coffeeMasterCategoryBadge absolute bottom-4 left-4">
                    <span className="coffeeMasterCategory px-3 py-1 bg-white/90 backdrop-blur-sm text-amber-800 text-sm font-semibold rounded-full">
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="coffeeMasterReadTime absolute bottom-4 right-4">
                    <span className="coffeeMasterTime px-3 py-1 bg-black/70 text-white text-sm font-medium rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="coffeeMasterPostContent p-6 lg:p-8">
                  {/* Post Meta */}
                  <div className="coffeeMasterPostMeta flex items-center text-gray-500 text-sm mb-4">
                    <div className="coffeeMasterAuthor flex items-center mr-4">
                      <div className="coffeeMasterAuthorAvatar w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-amber-800 text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="coffeeMasterAuthorName">{post.author}</span>
                    </div>
                    <div className="coffeeMasterPostDate">
                      {formatDate(post.date)}
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="coffeeMasterPostTitle text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="coffeeMasterPostExcerpt text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="coffeeMasterPostTags flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="coffeeMasterTag text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="coffeeMasterPostAction">
                    <button className="coffeeMasterReadMoreBtn group/btn inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-all duration-300">
                      <span>Read Article</span>
                      <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="coffeeMasterHoverOverlay absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`coffeeMasterBlogPagination flex justify-center items-center space-x-2 transform transition-all duration-1000 delay-600 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="coffeeMasterPaginationBtn p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`coffeeMasterPageBtn w-12 h-12 rounded-lg font-medium transition-all duration-300 ${
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
              className="coffeeMasterPaginationBtn p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Load More Button */}
        <div className={`coffeeMasterLoadMore text-center mt-8 transform transition-all duration-1000 delay-800 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="coffeeMasterLoadMoreBtn group inline-flex items-center px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            <span>Load More Articles</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
