import { useEffect, useState} from "react";
import Navbar from "../HomePage/Navbar";
import Navbar2 from "../HomePage/Navbar2";
import './product.css'
import { useLocation,useParams} from "react-router-dom";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function Product() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
  const [product,updateProduct] = useState(null)
  const location = useLocation();
  const [isLoading,updateLoading] = useState(true)
    const id = useParams().product
  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1050);
  };
async function fetchProduct(){
    const queryParams = new URLSearchParams(location.search);
    let category;
    queryParams.forEach((value, key) => {
        category = value.toLowerCase();
    });
    console.log(category);
    console.log(id);
    let pr = await axios.get(`http://localhost:3000/product/${category}/${id}`)
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
            <div className="specsDiv">
              {product.longDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>}
      
    </>
  );
}
