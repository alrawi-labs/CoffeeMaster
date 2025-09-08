import { useState, useEffect, useRef } from 'react';

interface CoffeeMasterBlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogSection() {
  const [coffeeMasterBlogVisible, setCoffeeMasterBlogVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const coffeeMasterBlogPosts: CoffeeMasterBlogPost[] = [
    {
      title: "Portable latest fashion for young women",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "31st January, 2018",
      category: "Travel",
      readTime: "5 min read",
    },
    {
      title: "Portable latest fashion for young women", 
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "31st January, 2018",
      category: "Life Style",
      readTime: "3 min read"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoffeeMasterBlogVisible(true);
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
    <section ref={sectionRef} className="coffeeMasterBlog py-20 lg:py-32 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="coffeeMasterBlogContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`coffeeMasterBlogHeader text-center mb-16 transform transition-all duration-1000 ${
          coffeeMasterBlogVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterBlogTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What kind of Coffee we serve for you
          </h2>
          <p className="coffeeMasterBlogSubtitle text-lg text-gray-600 max-w-2xl mx-auto">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="coffeeMasterBlogGrid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {coffeeMasterBlogPosts.map((post, index) => (
            <article
              key={index}
              className={`coffeeMasterBlogPost group cursor-pointer transform transition-all duration-700 ${
                coffeeMasterBlogVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="coffeeMasterPostCard bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-amber-200 transform group-hover:-translate-y-2">
                {/* Featured Image */}
                <div className="coffeeMasterPostImage relative aspect-video bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 overflow-hidden">
                  <div className="coffeeMasterImagePlaceholder absolute inset-0 bg-gradient-to-br from-amber-600/30 to-amber-800/30 flex items-center justify-center">
                    <span className="text-6xl text-white opacity-60">📰</span>
                  </div>
                  <div className="coffeeMasterImageOverlay absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="coffeeMasterCategoryBadge absolute top-4 left-4">
                    <span className="coffeeMasterCategory px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="coffeeMasterReadTime absolute top-4 right-4">
                    <span className="coffeeMasterTime px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="coffeeMasterPostContent p-8">
                  {/* Meta Info */}
                  <div className="coffeeMasterPostMeta flex items-center space-x-4 mb-4">
                    <div className="coffeeMasterAuthor flex items-center space-x-2">
                      <div className="coffeeMasterAuthorAvatar w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                        <span className="text-amber-800 text-sm font-bold">A</span>
                      </div>
                      <span className="coffeeMasterAuthorName text-sm text-gray-600">Admin</span>
                    </div>
                    <div className="coffeeMasterPostDate text-sm text-gray-500">
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="coffeeMasterPostTitle text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="coffeeMasterPostExcerpt text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="coffeeMasterPostAction">
                    <button className="coffeeMasterReadMoreBtn group-hover:bg-amber-600 group-hover:text-white inline-flex items-center text-amber-600 font-semibold transition-all duration-300 hover:gap-3 gap-2">
                      <span>Read More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="coffeeMasterPostHover absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className={`coffeeMasterBlogCta text-center mt-16 transform transition-all duration-1000 delay-500 ${
          coffeeMasterBlogVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <div className="coffeeMasterCtaCard bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="coffeeMasterCtaTitle text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Coffee Trends
            </h3>
            <p className="coffeeMasterCtaDesc text-amber-100 mb-8 max-w-2xl mx-auto">
              Get the latest news, brewing tips, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="coffeeMasterCtaActions flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="coffeeMasterViewAllBtn px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-300 transform hover:scale-105">
                View All Posts
              </button>
              <button className="coffeeMasterSubscribeBtn px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg hover:bg-amber-900 transition-colors duration-300 transform hover:scale-105">
                Subscribe Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="coffeeMasterBlogDecorations absolute inset-0 pointer-events-none overflow-hidden">
        <div className="coffeeMasterDecorNewspaper1 absolute top-20 left-10 text-amber-200/20 text-4xl animate-float">📰</div>
        <div className="coffeeMasterDecorNewspaper2 absolute bottom-32 right-16 text-amber-300/20 text-3xl animate-float delay-1000">📝</div>
        <div className="coffeeMasterDecorQuote1 absolute top-1/3 right-20 text-amber-200/10 text-6xl">"</div>
        <div className="coffeeMasterDecorQuote2 absolute bottom-1/3 left-16 text-amber-300/10 text-6xl">"</div>
      </div>
    </section>
  );
}
