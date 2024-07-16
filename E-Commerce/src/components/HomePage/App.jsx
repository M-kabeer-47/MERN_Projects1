import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Navbar2 from "./Navbar2.jsx";
import BackgroundPic from "./BackgroundPic.jsx";
import { Carousel1 } from "../Carousel1/Carousel1.jsx";
import './index.css';
import FeaturedProduct from "./featuredProducts/FeaturedProduct.jsx";
import Slider from "../HomePage/featuredPreBuids/PreBuilds.jsx";

export default function App() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
  const popularRef = useRef(null);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1050);
  };

  const handleScroll = () => {
    if (popularRef.current) {
      const rect = popularRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        popularRef.current.classList.add("animate");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="homePage">
        {isWideScreen ? <Navbar /> : <Navbar2 />}
        <BackgroundPic />
        <div className="gap">
          <h2 ref={popularRef} className="popular">MOST POPULAR</h2>
        </div>
        <Carousel1 />
        <FeaturedProduct />
      </div>
      <Slider />
    </>
  );
}
