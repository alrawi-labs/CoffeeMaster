import { useState, useEffect, useRef } from 'react';

interface PopularPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: number;
}

export default function PopularPostsSidebar() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const popularPosts: PopularPost[] = [
    {
      id: 1,
      title: "The Perfect Pour-Over: A Step-by-Step Guide",
      author: "Maria Santos",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Coffee Tips",
      image: "☕",
      views: 12500
    },
    {
      id: 2,
      title: "Ethiopian Coffee: Tracing the Origins",
      author: "David Chen", 
      date: "2024-01-12",
      readTime: "12 min",
      category: "Origin Stories",
      image: "🌍",
      views: 9800
    },
    {
      id: 3,
      title: "Sustainable Coffee: Making a Difference",
      author: "Dr. James Wilson",
      date: "2024-01-08", 
      readTime: "10 min",
      category: "Sustainability",
      image: "🌱",
      views: 8750
    },
    {
      id: 4,
      title: "5 Delicious Coffee Cocktails for Winter",
      author: "Isabella Rodriguez",
      date: "2024-01-10",
      readTime: "6 min", 
      category: "Recipes",
      image: "🍸",
      views: 7300
    },
    {
      id: 5,
      title: "The Science Behind Coffee Roasting",
      author: "Dr. Sarah Kim",
      date: "2024-01-01",
      readTime: "15 min",
      category: "Coffee Tips", 
      image: "🔬",
      views: 6900
    }
  ];

  const categories = [
    { name: 'Coffee Tips', count: 45, icon: '☕' },
    { name: 'Recipes', count: 32, icon: '🍴' },
    { name: 'Sustainability', count: 28, icon: '🌱' },
    { name: 'Origin Stories', count: 22, icon: '🌍' },
    { name: 'News', count: 18, icon: '📰' }
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <aside ref={sectionRef} className="coffeeMasterPopularSidebar py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="coffeeMasterSidebarContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="coffeeMasterSidebarGrid grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Popular Posts Section */}
          <div className={`coffeeMasterPopularSection lg:col-span-2 transform transition-all duration-1000 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="coffeeMasterSectionHeader mb-12">
              <h2 className="coffeeMasterSectionTitle text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Most Popular Articles
              </h2>
              <p className="coffeeMasterSectionSubtitle text-lg text-gray-600">
                Discover our readers' favorite coffee stories and guides
              </p>
            </div>

            <div className="coffeeMasterPopularList space-y-8">
              {popularPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`coffeeMasterPopularPost group cursor-pointer transform transition-all duration-700 ${
                    sectionVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="coffeeMasterPopularCard bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-amber-200 transition-all duration-300 p-6 transform group-hover:-translate-y-1">
                    <div className="coffeeMasterPopularContent flex items-start space-x-4">
                      {/* Rank Number */}
                      <div className="coffeeMasterRankNumber flex-shrink-0 w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Post Image */}
                      <div className="coffeeMasterPopularImage flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl">{post.image}</span>
                      </div>

                      {/* Post Info */}
                      <div className="coffeeMasterPopularInfo flex-1 min-w-0">
                        <div className="coffeeMasterPopularMeta flex items-center text-gray-500 text-sm mb-2">
                          <span className="coffeeMasterPopularCategory bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium mr-3">
                            {post.category}
                          </span>
                          <span className="coffeeMasterPopularDate">{formatDate(post.date)}</span>
                        </div>

                        <h3 className="coffeeMasterPopularTitle text-lg font-bold text-gray-900 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2 mb-2">
                          {post.title}
                        </h3>

                        <div className="coffeeMasterPopularDetails flex items-center justify-between text-gray-500 text-sm">
                          <div className="coffeeMasterAuthorInfo flex items-center">
                            <div className="coffeeMasterAuthorAvatar w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center mr-2">
                              <span className="text-amber-800 text-xs font-bold">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="coffeeMasterAuthorName">{post.author}</span>
                          </div>
                          <div className="coffeeMasterPostStats flex items-center space-x-3">
                            <span className="coffeeMasterReadTime">{post.readTime}</span>
                            <span className="coffeeMasterViews">👁 {formatViews(post.views)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="coffeeMasterViewAllContainer text-center mt-8">
              <button className="coffeeMasterViewAllBtn group inline-flex items-center px-6 py-3 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                <span>View All Popular Posts</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Categories Sidebar */}
          <div className={`coffeeMasterCategoriesSidebar transform transition-all duration-1000 delay-300 ${
            sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Categories Widget */}
            <div className="coffeeMasterWidget bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
              <h3 className="coffeeMasterWidgetTitle text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="coffeeMasterWidgetIcon mr-2">📂</span>
                Categories
              </h3>
              <div className="coffeeMasterCategoriesList space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className="coffeeMasterCategoryItem w-full flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all duration-300 text-left group"
                  >
                    <div className="coffeeMasterCategoryInfo flex items-center">
                      <span className="coffeeMasterCategoryIcon mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </span>
                      <span className="coffeeMasterCategoryName text-gray-700 group-hover:text-amber-800 font-medium">
                        {category.name}
                      </span>
                    </div>
                    <span className="coffeeMasterCategoryCount bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="coffeeMasterWidget bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
              <h3 className="coffeeMasterWidgetTitle text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="coffeeMasterWidgetIcon mr-2">🕒</span>
                Recent Posts
              </h3>
              <div className="coffeeMasterRecentList space-y-4">
                {popularPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="coffeeMasterRecentPost group cursor-pointer">
                    <div className="coffeeMasterRecentContent flex items-start space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-all duration-300">
                      <div className="coffeeMasterRecentImage w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-lg">{post.image}</span>
                      </div>
                      <div className="coffeeMasterRecentInfo min-w-0 flex-1">
                        <h4 className="coffeeMasterRecentTitle text-sm font-semibold text-gray-900 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="coffeeMasterRecentMeta text-xs text-gray-500">
                          {formatDate(post.date)} • {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="coffeeMasterWidget bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="coffeeMasterWidgetTitle text-xl font-bold mb-4 flex items-center">
                <span className="coffeeMasterWidgetIcon mr-2">📧</span>
                Stay Updated
              </h3>
              <p className="coffeeMasterWidgetDesc text-amber-100 mb-4 text-sm">
                Get the latest coffee stories and brewing tips delivered to your inbox weekly.
              </p>
              <button 
                onClick={() => {
                  const newsletter = document.querySelector('.coffeeMasterBlogNewsletter');
                  newsletter?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="coffeeMasterWidgetBtn w-full py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
