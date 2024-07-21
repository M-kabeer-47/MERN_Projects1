// HomeProducts.js
import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Button from './Button';
import './products.css';

const Product = ({ product, index }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    
  return (
    <div 
      className="featuredProduct Product"
      onMouseEnter={() => setHoveredProduct(index)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <img src={product.image} alt={product.title} className='images'/>            
      <p className="title">{product.title}</p>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.2} readOnly />
      <p className="category">{product.category}</p>
      <p className="price">{product.price}</p>  
      <div className="BUTTONDIV">
        <Button 
          text={"Add to cart"}
        />
        <Button 
          className="redButton" 
          text={"Add to wishlist"}
        />
      </div>
    </div>
  );
};

export default Product;
