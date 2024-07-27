import Navbar from '../HomePage/Navbar';
import Navbar2 from '../HomePage/Navbar2';


import Footer from "../HomePage/Footer/Footer.jsx"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from "../../store/category.js";
import { useNavigate, useParams,useLocation } from 'react-router-dom';
import FilterDiv from '../Products/FilterDiv.jsx';
import ProductDisplay from '../Products/productsDisplay.jsx';


export default function SearchResult() {
    
  const [title, updateTitle] = useState("");
  const [CATEGORY, UPDATECATEGORY] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  const c = useSelector((state)=>state.category.category);
const navigate =useNavigate()
  const requestBackend = async (query) => {
    try {
      setLoading(true);
      let results = await axios.get(`http://localhost:3000/search/${query}`);
      if(results.data === false){
        // console.log("False");
        navigate("/notfound");
      }
      else{
        results = results.data;
        console.log(results);
        updateTitle(`Search Results for ${query}`);
        dispatch(updateCategory(results));
        console.log(c);
        setLoading(false);
      }     
      }
    catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1050);
  const location = useLocation();
  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1050);
  };

  useEffect(() => {
    
  window.addEventListener("resize", handleResize);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('text');
  console.log(query);

    
    requestBackend(query);
    window.scrollTo(0,0);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.search]);

  

  return (
    <>
      <div className="homePage">
        {isWideScreen ? <Navbar /> : <Navbar2 />}
        <div className="main">
          <FilterDiv />
          <ProductDisplay title={title} loading={loading}  />
        </div>
        <Footer />
      </div>
    </>
  );
}
