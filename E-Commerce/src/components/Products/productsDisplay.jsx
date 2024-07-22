import { useEffect, useState } from "react"
import HomeProducts from "../HomeProducts"
import './products.css'
import Product from "./Product"
import { useSelector } from "react-redux"

export default function ProductDisplay(props) {
  let isFiltered = useSelector((state)=>state.category.isFiltered)
  let CATEGORY;
  if(isFiltered){
    CATEGORY = useSelector((state)=>state.category.filteredCategory)   
  }
  else{
    CATEGORY = useSelector((state)=>state.category.category);
  }
 
  useEffect(()=>{
    console.log(CATEGORY);
  })
    return (
      <div className="productsDiv">
        <h2 className="category">{props.title}</h2>
        <hr className="line"></hr>
        <div className="products">
          {CATEGORY.map((product, index) => (
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