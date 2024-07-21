
// HomeProducts.js

Rating
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './products.css'
import { Rating } from '@mui/material';
const Product = ({ product, index, type }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    
  return (
    <div className="featuredProduct Product" 
    onMouseEnter={() => setHoveredProduct(index)}
    onMouseLeave={() => setHoveredProduct(null)}
    >
      <img src={product.image} alt={product.title} className='images'/>            
      <p className="title">{product.title}</p>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.2} readOnly />
      <p className="category">{product.category}</p>
      <p className="price">{product.price}</p>  
    </div>
  );
};

export default Product
