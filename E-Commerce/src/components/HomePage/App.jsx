import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Navbar2 from "./Navbar2.jsx";
import BackgroundPic from "./BackgroundPic.jsx";
import { Carousel1 } from "../Carousel1/Carousel1.jsx";
import './index.css'

export default function App() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1050);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Scroll animation
    const handleScroll = () => {
      document.querySelectorAll('.popular, .carousel-1-page, .swiper-slide').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="homePage">
        {isWideScreen ? <Navbar /> : <Navbar2 />}
        <BackgroundPic />
        <div className="gap">
          <h2 className="popular">MOST POPULAR</h2>
        </div>
        <Carousel1 />
      </div>
    </>
  );
}
