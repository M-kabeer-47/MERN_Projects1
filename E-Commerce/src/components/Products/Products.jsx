import Navbar from '../HomePage/Navbar';
import Navbar2 from '../HomePage/Navbar2';
import FilterDiv from './FilterDiv';
import ProductDisplay from './productsDisplay.jsx';
import Footer from "../HomePage/Footer/Footer.jsx"
import axios from 'axios';
import { useState,useEffect, cloneElement} from 'react';

export default function Products(){
  const [title,updateTitle] = useState("")
  const [Category,updateCategory] = useState([])
  const requestBackend = async(category)=>{
    try{
      
      let categoryObject= await axios.post("http://localhost:3000/products",{
        category
      })
      categoryObject = categoryObject.data;
      updateTitle(categoryObject[0].category);
      updateCategory(categoryObject);
    
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
        const categories=["processors","x-box-games","hdds","ssds","monitors","power-supply","cases","graphic-cards","motherboards","rams","keyboards","mouse","cables","microphones","webcames","speakers","playstation","xbox","ps-games","gift-cards","nintendo","headphones"]
        if(categories.includes(category)){
          let categoryObject = requestBackend(category);
          
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
        <ProductDisplay 
        title={title}
        category={Category}
        /> 
        </div>
        <Footer />
        </div>
        
        </>
        

        
        
      )
}