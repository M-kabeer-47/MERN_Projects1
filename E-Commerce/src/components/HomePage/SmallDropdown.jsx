import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const SmallDropdown = forwardRef(({ isVisible }, ref) => {
  return (
    <div ref={ref} className={`smallDropdown ${isVisible ? 'showDropdown' : ''}`}>
      <Link  className='link'  to={"/valuedeals"}>Value Deals</Link>
      <Link className='link' to={"/smashdeals"}>Smash Deals</Link>
      <Link className='link' to={"/rapiddeals"}>Rapid Deals</Link>
      <Link className='link' to={"/xtremedeals"}>Xtreme Deals</Link>
    </div>
  );
});

export default SmallDropdown;
