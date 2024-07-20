import { useState } from "react"
import HomeProducts from "../HomeProducts"
import './products.css'
export default function productDisplay() {
    const [category,updateCategory]= useState("")
    

    return (
      <div className="productsDiv">
        <h2 className="category">{category}</h2>
        <div className="products">
          {/* {props.products.map((product, index) => (
            <HomeProducts
            key={index}
            product={product}
            index={index}
             />
          ))} */}
        </div>
      </div>
    )
}