import React from 'react';

export default function Star({ lineClass }) {
  return (
    <div className="mt-6 flex items-center">
      <div className={`w-20 border-2 ${lineClass}`} />
      <span className="mx-4 text-xl"><i className="fa-solid fa-star"></i></span>
      <div className={`w-20 border-2 ${lineClass}`} />
    </div>
  );
}