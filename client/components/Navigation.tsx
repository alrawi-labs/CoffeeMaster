import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoffeeMasterLogo from './CoffeeMasterLogo';


export default function Navigation() {
  const [coffeeMasterScrolled, setCoffeeMasterScrolled] = useState(false);
  const [coffeeMasterMobileMenuOpen, setCoffeeMasterMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleCoffeeMasterScroll = () => {
      setCoffeeMasterScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleCoffeeMasterScroll);
    return () => window.removeEventListener('scroll', handleCoffeeMasterScroll);
  }, []);

  return (
    <nav className={`coffeeMasterNav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      coffeeMasterScrolled 
        ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="coffeeMasterContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="coffeeMasterNavInner flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <CoffeeMasterLogo w={10} h={10} text="CoffeeMaster" />


          {/* Desktop Navigation */}
          <div className="coffeeMasterDesktopNav hidden lg:block">
            <div className="coffeeMasterNavLinks flex items-center space-x-8">
              <Link to="/" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/about" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link to="/coffee" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                Coffee
              </Link>
              <Link to="/reviews" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                Reviews
              </Link>
              <Link to="/blog" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="coffeeMasterNavLink text-white hover:text-amber-300 transition-colors duration-300 font-medium">
                Contact
              </Link>
              <div className="coffeeMasterDropdown relative group">
                <button className="coffeeMasterDropdownToggle text-white hover:text-amber-300 transition-colors duration-300 font-medium flex items-center">
                  Pages
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="coffeeMasterDropdownMenu absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <Link to="/generic" className="coffeeMasterDropdownItem block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200">
                    Generic
                  </Link>
                  <Link to="/elements" className="coffeeMasterDropdownItem block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200">
                    Elements
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="coffeeMasterMobileMenuBtn lg:hidden">
            <button
              onClick={() => setCoffeeMasterMobileMenuOpen(!coffeeMasterMobileMenuOpen)}
              className="coffeeMasterHamburger text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {coffeeMasterMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`coffeeMasterMobileMenu lg:hidden transition-all duration-300 ${
          coffeeMasterMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="coffeeMasterMobileMenuInner py-4 space-y-2">
            <Link to="/" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              About
            </Link>
            <Link to="/coffee" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Coffee
            </Link>
            <Link to="/reviews" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Reviews
            </Link>
            <Link to="/blog" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Blog
            </Link>
            <Link to="/generic" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Generic
            </Link>
            <Link to="/elements" className="coffeeMasterMobileNavLink block px-4 py-2 text-white hover:bg-amber-800/50 rounded-lg transition-colors duration-200">
              Elements
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
