import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

interface PlaceholderPageProps {
  title?: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title = "Coming Soon", 
  description = "This page is under construction. Please check back soon!" 
}: PlaceholderPageProps) {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '') || 'home';

  return (
    <div className="coffeeMasterApp min-h-screen flex flex-col">
      <Navigation />
      
      <main className="coffeeMasterPlaceholderMain flex-1 flex items-center justify-center py-20">
        <div className="coffeeMasterPlaceholderContainer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Coffee Cup Animation */}
          <div className="coffeeMasterPlaceholderIcon mb-8">
            <div className="coffeeMasterCupAnimation w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-4xl text-white">☕</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="coffeeMasterPlaceholderTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-4 capitalize">
            {title}
          </h1>

          {/* Page Name */}
          <div className="coffeeMasterPlaceholderBadge inline-block mb-6">
            <span className="coffeeMasterPageBadge px-4 py-2 bg-amber-100 text-amber-800 font-semibold rounded-full text-sm uppercase tracking-wide">
              {pageName} Page
            </span>
          </div>

          {/* Description */}
          <p className="coffeeMasterPlaceholderDesc text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Call to Action */}
          <div className="coffeeMasterPlaceholderActions space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button 
              onClick={() => window.history.back()}
              className="coffeeMasterGoBackBtn w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Go Back
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="coffeeMasterHomeBtn w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>

          {/* Progress Message */}
          <div className="coffeeMasterProgressMessage mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <h3 className="coffeeMasterProgressTitle text-xl font-semibold text-amber-800 mb-2">
              Actions! 🚀
            </h3>
            <p className="coffeeMasterProgressText text-amber-700">
              You can design it as an additional page or delete it if you want.
            </p>
          </div>

          {/* Coffee Facts */}
          <div className="coffeeMasterFacts mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="coffeeMasterFact text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="coffeeMasterFactIcon text-2xl mb-2">🌱</div>
              <h4 className="coffeeMasterFactTitle font-semibold text-gray-900 mb-1">Eco-Friendly</h4>
              <p className="coffeeMasterFactText text-sm text-gray-600">Sustainably sourced beans</p>
            </div>
            <div className="coffeeMasterFact text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="coffeeMasterFactIcon text-2xl mb-2">⚡</div>
              <h4 className="coffeeMasterFactTitle font-semibold text-gray-900 mb-1">Fresh Roasted</h4>
              <p className="coffeeMasterFactText text-sm text-gray-600">Daily roasting process</p>
            </div>
            <div className="coffeeMasterFact text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="coffeeMasterFactIcon text-2xl mb-2">❤️</div>
              <h4 className="coffeeMasterFactTitle font-semibold text-gray-900 mb-1">Made with Love</h4>
              <p className="coffeeMasterFactText text-sm text-gray-600">Crafted by experts</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
