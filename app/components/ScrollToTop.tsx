'use client'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      scroll.scrollToTop();
      setShowScroll(false);
    };
  
    return (
      <div
        className={`fixed rounded-full shadow-lg shadow-black bottom-10 right-6 z-50 transition-opacity duration-300 flex items-center justify-center animate-bounce ${
          showScroll ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FaArrowUp
          className="text-lightWhite   text-4xl shadow-lg shadow-black bg-yellow  rounded-full p-3 cursor-pointer hover:bg-goldenYellow"
          onClick={scrollToTop}
        />
      </div>
    );
  };
  export default ScrollToTop;