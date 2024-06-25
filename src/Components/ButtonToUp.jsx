import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-10 hidden lg:flex">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-purple-600 text-white shadow-lg transition duration-300"
        >
          <img src="/public/icons8-collapse-arrow-50 (1).png" alt="alt" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
