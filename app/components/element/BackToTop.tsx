"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollToTopInterval = setInterval(() => {
      const scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        clearInterval(scrollToTopInterval);
      } else {
        window.scrollTo(0, scrollTop - Math.ceil(scrollTop * 0.1));
      }
    }, 16);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center transition-opacity duration-300 hover:bg-blue-600 hover:opacity-90 focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;

