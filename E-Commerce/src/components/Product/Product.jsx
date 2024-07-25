import { useEffect, useState} from "react";
import Navbar from "../HomePage/Navbar";
import Navbar2 from "../HomePage/Navbar2";
import './product.css'
import { useLocation,useParams} from "react-router-dom";
import axios from "axios";

import { faL } from "@fortawesome/free-solid-svg-icons";
import Button from "../Products/Button";
import IncrementDecrementBtn from "./Quantity";
export default function Product() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
  const [product,updateProduct] = useState(null)
  const location = useLocation();
  const [isLoading,updateLoading] = useState(true)
    const id = useParams().product;
  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1050);
  };
async function fetchProduct(){
    const queryParams = new URLSearchParams(location.search);
    
    
    console.log(id);
    let pr = await axios.get(`http://localhost:3000/product/${id}`)
    updateProduct(pr.data);
    updateLoading(false);
    console.log(pr.data);
    console.log("YO");
}
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    fetchProduct();
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.search, id]);

  

  return (
    <>{!isLoading &&<div className="homePage">
        {isWideScreen ? <Navbar /> : <Navbar2 />}
        <div className="productPageDiv">
          <div className="productImageDiv">
            <img
              src={product.imageUrl.substr(1, product.imageUrl.length)}
              
            />
          </div>
          <div className="productDetailsDiv">
            <h2 className="productTitle">{product.name}</h2>
            <p className="productCategory">{product.category}</p>
            <p className="productDescription">{product.description}</p>
            <h3>Specifications</h3>
            <div className="specsDiv">

              {product.longDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div className="BUTTONDIV button-div">
              <IncrementDecrementBtn 
              minValue={0}
              maxValue={100}
              />
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
          </div>
        </div>
      </div>}
      
    </>
  );
}
