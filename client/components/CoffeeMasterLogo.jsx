// components/CoffeeMasterLogo.jsx
import React from "react";
import { Link } from "react-router-dom";

const CoffeeMasterLogo = ({w = "auto", h = "auto", text , isBackground = true, path= "/images/coffee-master-logo.png"}) => {
  const iconSize = `w-${w} h-${h}`;
  const bgClass = isBackground ? 'bg-gradient-to-br from-amber-400 to-amber-600' : '';
  return (
    <div className="coffeeMasterLogo">
      <Link
        to="/"
        className="coffeeMasterLogoLink flex items-center space-x-2 group"
      >
        <div
          className={`coffeeMasterLogoIcon ${iconSize} ${bgClass} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <img
            src= {path}
            alt="Logo"
            className="w-full h-full"
          />
        </div>
        {text && (
          <span className="coffeeMasterLogoText text-white font-bold text-xl lg:text-2xl tracking-tight">
            {text}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CoffeeMasterLogo;
