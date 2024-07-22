import * as React from 'react';

import Slider from '@mui/material/Slider';
import {filterProductsByPrice} from "../../store/category.js"
import { useDispatch } from 'react-redux';

function valuetext(value) {
  return `${value}Rs`;
}

export default function PriceSlider() {
  const [value, setValue] = React.useState([0, 60000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const handleFilterClick = () => {
    console.log("clicked");
    console.log(value);
    dispatch(filterProductsByPrice(value)); 
  };

  return (
        <>
        <h3>Filter by price</h3>
        
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}    
        min={0}
        max={500000}
      />
      <button className='sliderButton' onClick={handleFilterClick}>Filter</button>
    </>
  );
}
