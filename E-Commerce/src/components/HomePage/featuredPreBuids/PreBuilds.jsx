import React, { useState } from 'react';
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
  const itemsPerPage = 3; // Number of items to display per slide
  const totalItems = featuredProducts.length;

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage));
  };

  // Ensure we handle wrapping around
  const displayedProducts = [
    ...featuredProducts.slice(currentIndex, currentIndex + itemsPerPage),
    ...featuredProducts.slice(0, Math.max(0, (currentIndex + itemsPerPage) - totalItems))
  ];

  // Calculate the transform value for smooth sliding
  const translateX = -(currentIndex * (100 / itemsPerPage));

  return (
    <div className="sliderBigContainer">
      <div className="prebuildDiv">
        <p className='prebuildTitle'>FEATURED PRE BUILDS</p>
      </div>
      <div className="sliderContainer">
        <button className="arrowButton left" onClick={slideLeft}>←</button>
        <div className="slider" style={{ transform: `translateX(${translateX}%)` }}>
          {displayedProducts.map((product, index) => (
            <HomeProducts
              key={index}
              product={product}
              index={index}
              type={"prebuild"}
            />
          ))}
        </div>
        <button className="arrowButton right" onClick={slideRight}>→</button>
      </div>
    </div>
  );
};

export default Slider;
