
import React from "react";

const Header = () => {
  return (
    <div className="text-center mb-8 relative">
      <h1 className="text-5xl font-extrabold mb-1 relative z-10 font-squada">
        <span className="text-white stroke-text">DAILY</span>
      </h1>
      <h2 className="text-6xl font-extrabold relative z-10 font-squada">
        <span className="text-yellow-300 stroke-text transform inline-block">SPIN</span>
        <span className="text-white mx-2">&</span>
        <span className="text-yellow-300 stroke-text transform inline-block">WIN</span>
      </h2>
      
      {/* Star decorations */}
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
        <Star />
      </div>
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
        <Star />
      </div>
    </div>
  );
};

const Star = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0L18.75 11.25H30L21.25 18.75L24.75 30L15 22.5L5.25 30L8.75 18.75L0 11.25H11.25L15 0Z" fill="#FFC700" />
  </svg>
);

export default Header;
