import Navbar from '../HomePage/Navbar';
import Navbar2 from '../HomePage/Navbar2';
import FilterDiv from './FilterDiv';
import ProductDisplay from './productsDisplay.jsx';


import { useState,useEffect} from 'react';

export default function Products(){
    
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
    const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 1050);
      };
      useEffect(() => {
        window.addEventListener("resize", handleResize);

       
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
       
        </div>
        
        </>
        

        
        
      )
}