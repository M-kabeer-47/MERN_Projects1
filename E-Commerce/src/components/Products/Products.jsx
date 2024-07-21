import Navbar from '../HomePage/Navbar';
import Navbar2 from '../HomePage/Navbar2';
import FilterDiv from './FilterDiv';
import ProductDisplay from './productsDisplay.jsx';
import Footer from "../HomePage/Footer/Footer.jsx"
import axios from 'axios';
import { useState,useEffect, cloneElement} from 'react';

export default function Products(){
  const requestBackend = async(category)=>{
    try{
      console.log("Category exists");
      console.log(category);
      let categoryObject= await axios.post("http://localhost:3000/products",{
        category
      })
      console.log(categoryObject.data);
    
}
  
    catch(error){

    }
  }
    
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
    const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 1050);
      };
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        const pathname = window.location.pathname;
        let category = pathname.substring(10,pathname.length);
        const categories=["processors","x-box-games","hdds","ssds","monitors","powersupply","cases","graphic-cards","motherboards","rams","keyboards","mouse","cables","microphones","webcames","speakers","playstation","xbox","ps-games","gift-cards","nintendo","headphones"]
        console.log(category);
        if(categories.includes(category)){
          requestBackend(category);
        }
        else{
          console.log("category doesn't exist");
        }
        return () => {
          
            window.removeEventListener("resize", handleResize);
          
         
          
        };
      }, []);
      return(
        
        
        <>
        <div className="homePage">
        {isWideScreen ? <Navbar /> : <Navbar2 />}
        <div className="main">
        <FilterDiv />
        <ProductDisplay /> 
        </div>
        <Footer />
        </div>
        
        </>
        

        
        
      )
}