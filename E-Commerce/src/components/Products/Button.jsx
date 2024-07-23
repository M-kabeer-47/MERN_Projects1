import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'; // Import your icons

const Button = ({ className, text }) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine which icon to display based on className and screen width
  const icon = className === 'redButton'
    ? faHeart
    : faCartShopping;

  return (
    <button className={`hover-button ${className}`}>
      {isNarrowScreen ? (
        <FontAwesomeIcon icon={icon} />
      ) : (
        <>
          
          <p>{text}</p>
        </>
      )}
    </button>
  );
};

export default Button;
