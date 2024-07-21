import React from 'react';


const Button = ({ className,text }) => {
  return (
    <button className={`hover-button ${className}`}>
      {text}
    </button>
  );
};

export default Button;