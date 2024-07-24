
// HomeProducts.js


import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
const HomeProducts = ({ product, index, type }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    useEffect(()=>{
      const handleResize = ()=>{
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener("resize",handleResize)
      return ()=>{
        window.removeEventListener("resize",handleResize)
      }
    })
  return (
    <div className={type === 'prebuild' ? 'productCard' : 'featuredProduct'} 
    onMouseEnter={() => setHoveredProduct(index)}
    onMouseLeave={() => setHoveredProduct(null)}
    >
      <img src={product.image} alt={product.title} className={type === 'prebuild' ? 'productImage': 'images'}/>
      {(hoveredProduct === index && screenWidth > 1000) &&(
                <div className="cart visible">
                  <p>Add to cart</p>
                </div>
              )}
      {(screenWidth <1000 && type!="prebuild")&&
      (
        
         <div className={`cartIconDiv ${type === 'prebuild' && 'preBuildCart'}`}>
         <FaShoppingCart className='productCart' />
         </div>
      
      )}
      {(screenWidth <1000 && type==="prebuild")&&
      (
        <div className='cartWrapper'>
          <div className={`cartIconDiv ${type === 'prebuild' && 'preBuildCart'}`}>
         <FaShoppingCart className='productCart' />
         </div>
        </div>
         
      
      )}
     
                
      <p className="title">{product.title}</p>
      <p className="category">{product.category}</p>
      <p className="price">{product.price}</p>  
    </div>
  );
};

export default HomeProducts;
