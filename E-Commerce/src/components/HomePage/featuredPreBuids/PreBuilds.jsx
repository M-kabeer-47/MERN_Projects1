import React, { useState, useEffect } from 'react';
import image1 from "./value-1.png";
import image2 from "./value-2.png";
import image3 from "./value-3.png";
import image4 from "./value-4.png";
import image5 from "./value-5.png";
import image6 from "./value-6.png";
import image7 from "./value-7.png";
import image8 from "./value-8.png";
import './index.css'; // Ensure this imports the CSS file with the above styles
import HomeProducts from '../../HomeProducts';

const featuredProducts = [
  { title: "Value 1", category: "Pre Build PC, Value", price: "Rs50,000", image: image1 },
  { title: "Value 2", category: "Pre Build PC, Value", price: "Rs110,000", image: image2 },
  { title: "Value 3", category: "Pre Build PC, Value", price: "Rs109,000", image: image3 },
  { title: "Value 4", category: "Pre Build PC, Value", price: "Rs112,999", image: image4 },
  { title: "Value 5", category: "Pre Build PC, Value", price: "Rs129,500", image: image5 },
  { title: "Value 6", category: "Pre Build PC, Value", price: "Rs150,000", image: image6 },
  { title: "Value 7", category: "Pre Build PC, Value", price: "Rs172,000", image: image7 },
  { title: "Value 8", category: "Pre Build PC, Value", price: "Rs200,000", image: image8 },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items per page
  const totalItems = featuredProducts.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideLeft = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, totalItems - itemsPerPage));
  };

  // Calculate the transform value for smooth sliding
  const translateX = -(currentIndex * 100 / itemsPerPage);

  return (
    <div className="sliderBigContainer">
      <div className="prebuildDiv">
        <p className='prebuildTitle'>FEATURED PRE BUILDS</p>
      </div>
      <div className="sliderContainer">
        <button className="arrowButton left" onClick={slideLeft} disabled={currentIndex === 0}>←</button>
        <div className="sliderWrapper">
          <div className="slider" style={{ transform: `translateX(${translateX}%)` }}>
            {featuredProducts.map((product, index) => (
              <div key={index} className="sliderItem">
                <HomeProducts
                  product={product}
                  index={index}
                  type={"prebuild"}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="arrowButton right" onClick={slideRight} disabled={currentIndex + itemsPerPage >= totalItems}>→</button>
      </div>
    </div>
  );
};

export default Slider;
