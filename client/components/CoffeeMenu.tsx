import { useState, useEffect, useRef } from 'react';

interface CoffeeMasterMenuItem {
  name: string;
  price: number;
  description: string;
  icon: string;
  img: string;
}

export default function CoffeeMenu() {
  const [coffeeMasterMenuVisible, setCoffeeMasterMenuVisible] = useState(false);
  const [coffeeMasterHoveredItem, setCoffeeMasterHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const coffeeMasterMenuItems: CoffeeMasterMenuItem[] = [
    {
      name: "Cappuccino",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "☕",
      img: "/images/cappuccino.jpg"
    },
    {
      name: "Americano", 
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "🔥",
      img: "/images/americano.jpg"
    },
    {
      name: "Espresso",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "⚡",
      img: "/images/espresso.jpg"
    },
    {
      name: "Macchiato",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "🥛",
      img: "/images/macchiato.jpg"
    },
    {
      name: "Mocha",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "🍫",
      img: "/images/mocha.jpg"
    },
    {
      name: "Coffee Latte",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "☕",
      img: "/images/coffee-latte.jpg"
    },
    {
      name: "Piccolo Latte",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "🥤",
      img: "/images/piccolo-latte.jpg"
    },
    {
      name: "Ristretto",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "💫",
      img: "/images/ristretto.jpg"
    },
    {
      name: "Affogato",
      price: 49,
      description: "Usage of the Internet is becoming more common due to rapid advance.",
      icon: "🍨",
      img: "/images/affogato.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoffeeMasterMenuVisible(true);
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
    <section ref={sectionRef} className="coffeeMasterMenu py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="coffeeMasterMenuContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`coffeeMasterMenuHeader text-center mb-16 transform transition-all duration-1000 ${
          coffeeMasterMenuVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="coffeeMasterMenuTitle text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What kind of Coffee we serve for you
          </h2>
          <p className="coffeeMasterMenuSubtitle text-lg text-gray-600 max-w-2xl mx-auto">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="coffeeMasterMenuGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMasterMenuItems.map((item, index) => (
            <div
              key={index}
              className={`coffeeMasterMenuItem group transform transition-all duration-700 ${
                coffeeMasterMenuVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setCoffeeMasterHoveredItem(index)}
              onMouseLeave={() => setCoffeeMasterHoveredItem(null)}
            >
              <div className="coffeeMasterMenuCard bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-amber-200 transform group-hover:-translate-y-2">
                {/* Card Header */}
                <div className="coffeeMasterCardHeader relative p-8 bg-gradient-to-br from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300"
                 style={{backgroundImage: `url('${item.img}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="coffeeMasterIconContainer w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="coffeeMasterMenuIcon text-2xl">{item.icon}</span>
                  </div>
                  
                  <div className="coffeeMasterItemInfo flex items-center justify-between">
                    <h3 className="coffeeMasterItemName text-xl font-bold text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="coffeeMasterPrice bg-amber-600 text-white px-4 py-2 rounded-full font-bold group-hover:bg-amber-700 transition-colors duration-300">
                      ${item.price}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`coffeeMasterCardDecor absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-full opacity-20 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500 ${
                    coffeeMasterHoveredItem === index ? 'animate-pulse' : ''
                  }`}></div>
                </div>

                {/* Card Body */}
                <div className="coffeeMasterCardBody p-8">
                  <p className="coffeeMasterItemDesc text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="coffeeMasterCardAction mt-6">
                    <button className="coffeeMasterOrderBtn w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="coffeeMasterHoverOverlay absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`coffeeMasterMenuFooter text-center mt-16 transform transition-all duration-1000 delay-500 ${
          coffeeMasterMenuVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <button className="coffeeMasterViewAllBtn group inline-flex items-center px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            <span>View Full Menu</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="coffeeMasterMenuDecorations absolute inset-0 pointer-events-none overflow-hidden">
        <div className="coffeeMasterDecorBean1 absolute top-32 left-16 w-4 h-4 bg-amber-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="coffeeMasterDecorBean2 absolute bottom-32 right-16 w-6 h-6 bg-amber-400 rounded-full opacity-20 animate-bounce delay-2000"></div>
        <div className="coffeeMasterDecorSteam1 absolute top-1/4 right-1/4 w-2 h-16 bg-gradient-to-t from-amber-200 to-transparent opacity-10 animate-pulse"></div>
        <div className="coffeeMasterDecorSteam2 absolute bottom-1/4 left-1/4 w-2 h-12 bg-gradient-to-t from-amber-300 to-transparent opacity-10 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
