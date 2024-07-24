// HomeProducts.js
import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Button from './Button';
import './products.css';

import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {updateProduct} from "../../store/category.js"
const Product = ({ product, index,category }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const dispatch = useDispatch()
    
  return (
    <Link to={`/product/${product._id}?category=${category}`} onClick={()=>{
      dispatch(updateProduct(product))
    }}> 
    <div 
      className="featuredProduct Product"
      onMouseEnter={() => setHoveredProduct(index)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <img src={product.imageUrl.substr(1,product.imageUrl.length)} className='images' />           
       <p className="title">{product.name}</p>
       <Tooltip title={product.rating.toFixed(1)}>
        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.1}
          readOnly
          size="large"
          
        />
      </Tooltip>
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
     </Link>
    
  );
};

export default Product;
