import Navbar from '../HomePage/Navbar';
import Navbar2 from '../HomePage/Navbar2';
import FilterDiv from './FilterDiv';
import './products.css'
import productDisplay from './productsDisplay.jsx';
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
        
        // {/* {isWideScreen ? <Navbar /> : <Navbar2 />} */}
        <>

        <FilterDiv />
        </>
        

        
        
      )
}