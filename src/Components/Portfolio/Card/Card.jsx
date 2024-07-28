import React from 'react';

export default function Card({ image, altText, iconClass }) {
  return (
    <div className="portfolio-card group relative">
      <div className="img-layer absolute inset-0 bg-green-600 opacity-0 flex justify-center items-center rounded-lg group-hover:opacity-80 transition-all duration-500 cursor-pointer">
        <i className={`${iconClass} text-white text-8xl`}></i>
      </div>
      <img src={image} alt={altText} className='w-full rounded-lg' />
    </div>
  );
}
