import React, { useEffect, useRef, useState } from "react";
import './products.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ children, forwardedRef }) => (
  <span className="material-symbols-outlined" ref={forwardedRef}>
    {children}
  </span>
);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const iconRef = useRef(null);
  const [sort, updateSort] = useState("price low to high");
  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (shouldOpen) => {
    if (dropdownRef.current) {
      if (shouldOpen) {
        dropdownRef.current.classList.add("open");
      } else {
        dropdownRef.current.classList.remove("open");
      }
    }
    if (iconRef.current) {
      iconRef.current.innerText = shouldOpen ? "close" : "expand_more";
    }
  };

  useEffect(() => {
    const handleClickOutside = () => toggleDropdown(false);
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    toggleDropdown(isOpen);
  }, [isOpen]);

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <button onClick={handleDropdownClicked}>
        <p>{"Sort by: "+sort}</p>
      <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff", fontSize: "16px" }}
              />
      </button>
      <div className="Menu">
        <button onClick={()=>{
            updateSort("price low to high")
          }}>
          <p >price low to high</p>
        </button>
        <button onClick={()=>{
            updateSort("price high to low")
          }}>
          <p >price high to low</p>
        </button>
        <button onClick={()=>{
            updateSort("Highly rated")
          }}>
          <p >Highly rated</p>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
