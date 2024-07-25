import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import SmallDropdown from "./SmallDropdown.jsx";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import './index.css';

export default function Navbar() {
  const count = 5;
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSmallDropdownVisible, setIsSmallDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const productsRef = useRef(null); // Ref for the products div
  const dealsRef = useRef(null); // Ref for the deals div

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#FF6347" : "#A0ACBD",
    transition: "color 0.3s ease",
    cursor: "pointer",
  });

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      productsRef.current &&
      !productsRef.current.contains(event.target) &&
      dealsRef.current &&
      !dealsRef.current.contains(event.target)
    ) {
      setIsDropdownVisible(false); // Hide the dropdown if clicked outside
      setIsSmallDropdownVisible(false); // Hide the small dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductsClick = () => {
    setIsDropdownVisible((prev) => !prev); // Toggle the dropdown visibility
  };

  const handleDealsClick = () => {
    setIsSmallDropdownVisible((prev) => !prev); // Toggle the small dropdown visibility
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>GlitchWare</h2>
        </div>
        <div className="navOptions">
          <p>HOME</p>
          <div
            className="products"
            onClick={handleProductsClick}
            ref={productsRef} // Assign ref to products div
          >
            <div
              className="prod"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <p>PRODUCTS</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff", fontSize: "11px" }}
              />
            </div>
            <Dropdown isVisible={isDropdownVisible} ref={dropdownRef} />
          </div>
          <div
            className="deals"
            onClick={handleDealsClick}
            ref={dealsRef} // Assign ref to deals div
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <p>Pre BUILD PC</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff", fontSize: "11px" }}
              />
            </div>
            <SmallDropdown isVisible={isSmallDropdownVisible} />
          </div>
        </div>

        <SearchBar
        expanded={true}
         /> {/* Use the SearchBar component */}

        <div className="lastOptions">
          <p className="loginOption">Login/Sign Up</p>
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faHeart}
              className="icons lastIcons"
              style={iconStyle("heart")}
              onMouseEnter={() => handleMouseEnter("heart")}
              onMouseLeave={handleMouseLeave}
            />
            {count > 0 && <span className="badge">{count}</span>}
          </div>
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="icons lastIcons"
              style={iconStyle("cart")}
              onMouseEnter={() => handleMouseEnter("cart")}
              onMouseLeave={handleMouseLeave}
            />
            {count > 0 && <span className="badge badge2">{count}</span>}
          </div>
        </div>
      </div>
    </>
  );
}
