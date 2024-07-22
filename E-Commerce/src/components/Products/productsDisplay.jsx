import { useState } from "react"
import HomeProducts from "../HomeProducts"
import './products.css'
import Product from "./Product"


export default function ProductDisplay(props) {
    
    

    return (
      <div className="productsDiv">
        <h2 className="category">{props.title}</h2>
        <hr className="line"></hr>
        <div className="products">
          {props.category.map((product, index) => (
            <Product
            key={index}
            product={product}
            index={index}
             />
          ))}
        </div>
      </div>
    )
}