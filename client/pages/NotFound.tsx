import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="coffeeMasterApp min-h-screen flex flex-col">
      <Navigation />
      
      <main className="coffeeMasterNotFoundMain flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="coffeeMasterNotFoundContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Large 404 with Coffee Theme */}
          <div className="coffeeMasterNotFoundIcon mb-8">
            <div className="coffeeMaster404 text-9xl lg:text-[12rem] font-bold text-amber-200 mb-4 leading-none">
              4<span className="text-amber-400">☕</span>4
            </div>
          </div>

          {/* Title */}
          <h1 className="coffeeMasterNotFoundTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Oops! Page Not Found
          </h1>

          {/* Subtitle */}
          <p className="coffeeMasterNotFoundSubtitle text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Looks like this page got lost in the coffee grinder! 
            The page you're looking for doesn't exist, but our coffee is still brewing strong.
          </p>

          {/* Coffee-themed message */}
          <div className="coffeeMasterNotFoundMessage bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
            <div className="coffeeMasterMessageIcon text-3xl mb-2">☕</div>
            <h3 className="coffeeMasterMessageTitle text-xl font-semibold text-amber-800 mb-2">
              Need a Coffee Break?
            </h3>
            <p className="coffeeMasterMessageText text-amber-700">
              While you're here, why not explore our amazing coffee collection or 
              head back to our homepage for the full CoffeeMaster experience?
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="coffeeMasterNotFoundActions space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
            <Link 
              to="/"
              className="coffeeMasterHomeBtn inline-block w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Back to Home
            </Link>
            <Link 
              to="/coffee"
              className="coffeeMasterMenuBtn inline-block w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Coffee Menu
            </Link>
          </div>

          {/* Popular Links */}
          <div className="coffeeMasterPopularLinks">
            <h4 className="coffeeMasterLinksTitle text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h4>
            <div className="coffeeMasterLinksGrid grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/about" 
                className="coffeeMasterPopularLink p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
              >
                <div className="coffeeMasterLinkIcon text-2xl mb-2">🏪</div>
                <span className="coffeeMasterLinkText font-medium text-gray-700 hover:text-amber-600">About Us</span>
              </Link>
              <Link 
                to="/coffee" 
                className="coffeeMasterPopularLink p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
              >
                <div className="coffeeMasterLinkIcon text-2xl mb-2">☕</div>
                <span className="coffeeMasterLinkText font-medium text-gray-700 hover:text-amber-600">Coffee Menu</span>
              </Link>
              <Link 
                to="/reviews" 
                className="coffeeMasterPopularLink p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
              >
                <div className="coffeeMasterLinkIcon text-2xl mb-2">⭐</div>
                <span className="coffeeMasterLinkText font-medium text-gray-700 hover:text-amber-600">Reviews</span>
              </Link>
              <Link 
                to="/blog" 
                className="coffeeMasterPopularLink p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
              >
                <div className="coffeeMasterLinkIcon text-2xl mb-2">📝</div>
                <span className="coffeeMasterLinkText font-medium text-gray-700 hover:text-amber-600">Blog</span>
              </Link>
            </div>
          </div>

          {/* Floating Coffee Beans */}
          <div className="coffeeMasterFloatingBeans absolute inset-0 pointer-events-none">
            <div className="coffeeMasterBean1 absolute top-20 left-20 text-amber-300/30 text-2xl animate-bounce delay-500">☕</div>
            <div className="coffeeMasterBean2 absolute top-40 right-32 text-amber-400/30 text-xl animate-bounce delay-1000">☕</div>
            <div className="coffeeMasterBean3 absolute bottom-32 left-32 text-amber-300/30 text-lg animate-bounce delay-1500">☕</div>
            <div className="coffeeMasterBean4 absolute bottom-20 right-20 text-amber-400/30 text-2xl animate-bounce delay-2000">☕</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
