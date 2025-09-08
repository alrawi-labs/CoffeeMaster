import { useState, useEffect, useRef } from 'react';

interface CoffeeItem {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  origin: string;
  roastLevel: string;
  brewingTips: string;
  image: string;
  rating: number;
  popular: boolean;
  img: string;
}

export default function CoffeeMenuSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ['All', 'Espresso', 'Single Origin', 'Blend', 'Decaf', 'Cold Brew'];

  const coffeeItems: CoffeeItem[] = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      type: "Single Origin",
      price: 24.99,
      description: "Bright, floral, and wine-like with notes of bergamot and lemon",
      origin: "Yirgacheffe, Ethiopia",
      roastLevel: "Light",
      brewingTips: "Perfect for pour-over. Use 195°F water, 1:16 ratio, 3-4 min extraction",
      image: "🇪🇹",
      rating: 4.9,
      popular: true,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 2,
      name: "Colombian Supremo",
      type: "Single Origin",
      price: 22.99,
      description: "Full-bodied with chocolate and caramel notes, perfectly balanced",
      origin: "Huila, Colombia",
      roastLevel: "Medium",
      brewingTips: "Excellent for drip coffee. Use 200°F water, 1:15 ratio",
      image: "🇨🇴",
      rating: 4.8,
      popular: true,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 3,
      name: "House Blend Espresso",
      type: "Espresso",
      price: 26.99,
      description: "Rich, creamy espresso with notes of dark chocolate and nuts",
      origin: "Brazil & Guatemala",
      roastLevel: "Dark",
      brewingTips: "Perfect for espresso machines. 9 bars pressure, 25-30 sec extraction",
      image: "☕",
      rating: 4.7,
      popular: false,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 4,
      name: "Guatemala Antigua",
      type: "Single Origin",
      price: 25.99,
      description: "Smoky and spicy with hints of cocoa and subtle fruit undertones",
      origin: "Antigua Valley, Guatemala",
      roastLevel: "Medium-Dark",
      brewingTips: "Great for French press. Use 200°F water, steep for 4 minutes",
      image: "🇬🇹",
      rating: 4.6,
      popular: false,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 5,
      name: "Signature Cold Brew",
      type: "Cold Brew",
      price: 19.99,
      description: "Smooth, naturally sweet cold brew concentrate with chocolate notes",
      origin: "Brazil & Peru",
      roastLevel: "Medium",
      brewingTips: "Dilute 1:1 with cold water or milk. Serve over ice",
      image: "🧊",
      rating: 4.8,
      popular: true,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 6,
      name: "Decaf Swiss Water",
      type: "Decaf",
      price: 21.99,
      description: "Full flavor without caffeine, using chemical-free Swiss Water process",
      origin: "Mexico & Colombia",
      roastLevel: "Medium",
      brewingTips: "Brew like regular coffee. Slightly longer extraction recommended",
      image: "💤",
      rating: 4.5,
      popular: false,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 7,
      name: "CoffeeMaster Blend",
      type: "Blend",
      price: 23.99,
      description: "Our signature blend with perfect balance of body, acidity, and aroma",
      origin: "Multi-Origin",
      roastLevel: "Medium",
      brewingTips: "Versatile for all brewing methods. Start with 1:16 ratio",
      image: "🏆",
      rating: 4.9,
      popular: true,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 8,
      name: "Kenya AA",
      type: "Single Origin",
      price: 27.99,
      description: "Bold and wine-like with black currant and citrus complexity",
      origin: "Central Kenya",
      roastLevel: "Medium-Light",
      brewingTips: "Excellent for V60. Use 205°F water, bloom for 30 seconds",
      image: "🇰🇪",
      rating: 4.7,
      popular: false,
      img: "/images/heart-coffee.jpg"
    },
    {
      id: 9,
      name: "Italian Roast Espresso",
      type: "Espresso",
      price: 24.99,
      description: "Bold, intense espresso with smoky finish and low acidity",
      origin: "Italy-style blend",
      roastLevel: "Dark",
      brewingTips: "Traditional espresso brewing. Fine grind, 20-25 second shots",
      image: "🇮🇹",
      rating: 4.6,
      popular: false,
      img: "/images/heart-coffee.jpg"
    }
  ];

  const filteredItems = selectedFilter === 'All' 
    ? coffeeItems 
    : coffeeItems.filter(item => item.type === selectedFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenuVisible(true);
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

  return (
    <section ref={sectionRef} className="coffeeMasterMenuSection py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="coffeeMasterMenuContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`coffeeMasterMenuHeader text-center mb-16 transform transition-all duration-1000 ${
          menuVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterMenuTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Coffee Collection
          </h2>
          <p className="coffeeMasterMenuSubtitle text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully curated from the world's finest coffee regions, each blend tells a unique story 
            of flavor, tradition, and craftsmanship.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`coffeeMasterMenuFilters flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
          menuVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`coffeeMasterFilterBtn px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Coffee Grid */}
        <div className="coffeeMasterMenuGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((coffee, index) => (
            <div
              key={coffee.id}
              className={`coffeeMasterMenuItem group cursor-pointer transform transition-all duration-700 ${
                menuVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(coffee.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="coffeeMasterMenuCard bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-amber-200 transform group-hover:-translate-y-2 group-hover:scale-105">
                {/* Card Header */}
                <div className="coffeeMasterCardHeader relative p-8 bg-gradient-to-br from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-500"
                style={{
                    backgroundImage: `url('${coffee.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  {/* Coffee Image/Icon */}
                  <div className="coffeeMasterCoffeeIcon w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto">
                    <span className="text-3xl">{coffee.image}</span>
                  </div>

                  {/* Popular Badge */}
                  {coffee.popular && (
                    <div className="coffeeMasterPopularBadge absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Rating */}
                  <div className="coffeeMasterRating flex items-center justify-center mb-4">
                    <span className="text-amber-500 text-lg mr-2">★</span>
                    <span className="font-semibold text-gray-700">{coffee.rating}</span>
                  </div>

                  {/* Coffee Name & Price */}
                  <div className="coffeeMasterItemInfo text-center">
                    <h3 className="coffeeMasterItemName text-xl font-bold text-gray-900 group-hover:text-amber-800 transition-colors duration-300 mb-2">
                      {coffee.name}
                    </h3>
                    <div className="coffeeMasterPrice text-2xl font-bold text-amber-600 mb-4">
                      ${coffee.price}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="coffeeMasterCardBody p-8 pt-6">
                  {/* Type & Origin */}
                  <div className="coffeeMasterCoffeeDetails flex justify-between items-center mb-4">
                    <span className="coffeeMasterType text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                      {coffee.type}
                    </span>
                    <span className="coffeeMasterRoast text-sm text-gray-600">
                      {coffee.roastLevel} Roast
                    </span>
                  </div>

                  {/* Description */}
                  <p className="coffeeMasterItemDesc text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {coffee.description}
                  </p>

                  {/* Origin */}
                  <div className="coffeeMasterOrigin text-sm text-gray-500 mb-6">
                    <span className="font-medium">Origin:</span> {coffee.origin}
                  </div>

                  {/* Hover Overlay with Brewing Tips */}
                  <div className={`coffeeMasterBrewingTips absolute inset-0 bg-gradient-to-br from-amber-600/95 to-amber-800/95 backdrop-blur-sm p-8 flex flex-col justify-center text-white transition-all duration-500 ${
                    hoveredItem === coffee.id 
                      ? 'opacity-100 visible' 
                      : 'opacity-0 invisible'
                  }`}>
                    <h4 className="text-xl font-bold mb-4 text-center">Brewing Tips</h4>
                    <p className="text-amber-100 leading-relaxed text-center">
                      {coffee.brewingTips}
                    </p>
                    <div className="coffeeMasterBrewingActions mt-6 flex justify-center">
                      <button className="coffeeMasterLearnMore px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="coffeeMasterCardAction">
                    <button className="coffeeMasterAddToCart w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:from-amber-600 hover:to-amber-700">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Card Hover Effect */}
                <div className="coffeeMasterHoverEffect absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={`coffeeMasterMenuFooter text-center mt-16 transform transition-all duration-1000 delay-500 ${
          menuVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="coffeeMasterLoadMore group inline-flex items-center px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            <span>Load More Coffee</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="coffeeMasterMenuDecorations absolute inset-0 pointer-events-none overflow-hidden">
        <div className="coffeeMasterDecorBean1 absolute top-32 left-16 w-4 h-4 bg-amber-300 rounded-full opacity-20 animate-float"></div>
        <div className="coffeeMasterDecorBean2 absolute bottom-32 right-16 w-6 h-6 bg-amber-400 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="coffeeMasterDecorSteam1 absolute top-1/4 right-1/4 w-2 h-16 bg-gradient-to-t from-amber-200 to-transparent opacity-10 animate-coffee-steam"></div>
        <div className="coffeeMasterDecorSteam2 absolute bottom-1/4 left-1/4 w-2 h-12 bg-gradient-to-t from-amber-300 to-transparent opacity-10 animate-coffee-steam delay-1000"></div>
      </div>
    </section>
  );
}
