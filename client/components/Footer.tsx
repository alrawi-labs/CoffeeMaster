import CoffeeMasterLogo from "./CoffeeMasterLogo";
export default function Footer() {
  return (
    <footer className="coffeeMasterFooter bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="coffeeMasterFooterContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="coffeeMasterFooterGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="coffeeMasterFooterNewsletter">
            <CoffeeMasterLogo isBackground={false} />
          </div>
          {/* About Section */}
          <div className="coffeeMasterFooterAbout lg:col-span-2">
            <h3 className="coffeeMasterFooterTitle text-2xl font-bold mb-4 text-amber-200">
              About Us
            </h3>
            <p className="coffeeMasterFooterDesc text-amber-100 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <div className="coffeeMasterCopyright text-amber-200 text-sm">
              <p>
                Copyright © {new Date().getFullYear()} All rights reserved |
                This template is made with{" "}
                <span className="text-red-400">♥</span> by{" "}
                <span className="font-semibold">Yasir Alrawi</span>
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div className="coffeeMasterFooterSocial">
            <h3 className="coffeeMasterFooterTitle text-xl font-bold mb-4 text-amber-200">
              Follow Us
            </h3>
            <p className="coffeeMasterSocialDesc text-amber-100 mb-4">
              Let us be social
            </p>
            <div className="coffeeMasterSocialLinks flex space-x-4">
              <a
                href="#"
                className="coffeeMasterSocialLink w-10 h-10 bg-amber-700/50 rounded-full flex items-center justify-center hover:bg-amber-600 transform hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="coffeeMasterSocialLink w-10 h-10 bg-amber-700/50 rounded-full flex items-center justify-center hover:bg-amber-600 transform hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
             2.76 2.24 5 5 5h14c2.76 0 5-2.24 
             5-5v-14c0-2.76-2.24-5-5-5zm-11 
             19h-3v-10h3v10zm-1.5-11.27c-.96 
             0-1.73-.78-1.73-1.73s.78-1.73 
             1.73-1.73 1.73.78 
             1.73 1.73-.77 1.73-1.73 
             1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
             0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 
             1.38-1.55 2.84-1.55 3.04 0 3.6 
             2 3.6 4.6v5.6z"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="coffeeMasterSocialLink w-10 h-10 bg-amber-700/50 rounded-full flex items-center justify-center hover:bg-amber-600 transform hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="coffeeMasterSocialLink w-10 h-10 bg-amber-700/50 rounded-full flex items-center justify-center hover:bg-amber-600 transform hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="coffeeMasterFooterBottom border-t border-amber-700/50 py-6">
        <div className="coffeeMasterFooterBottomContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="coffeeMasterBottomContent flex flex-col md:flex-row items-center justify-center text-amber-200 text-sm">
            <p>
              © {new Date().getFullYear()} CoffeeMaster. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
