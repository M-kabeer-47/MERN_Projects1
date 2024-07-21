import * as React from 'react';

import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}Rs`;
}

export default function PriceSlider() {
  const [value, setValue] = React.useState([0, 60000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        max={140000}
      />
      <button className='sliderButton'>Filter</button>
    </>
  );
}
