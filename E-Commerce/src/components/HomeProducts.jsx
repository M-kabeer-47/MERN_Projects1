
// HomeProducts.js


import React, { useState } from 'react';


const HomeProducts = ({ product, index, type }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
  return (
    <div className={type === 'prebuild' ? 'productCard' : 'featuredProduct'} 
    onMouseEnter={() => setHoveredProduct(index)}
    onMouseLeave={() => setHoveredProduct(null)}
    >
      <img src={product.image} alt={product.title} className={type === 'prebuild' ? 'productImage': 'images'}/>
      {hoveredProduct === index && (
                <div className="cart visible">
                  <p>Add to cart</p>
                </div>
              )}
      <p className="title">{product.title}</p>
      <p className="category">{product.category}</p>
      <p className="price">{product.price}</p>  
    </div>
  );
};

export default HomeProducts;
