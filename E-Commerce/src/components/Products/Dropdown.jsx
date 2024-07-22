import React, { useEffect, useRef, useState } from "react";
import './products.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { sortLowToHigh, sortHighToLow, sortHighlyRated } from "../../store/category.js";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, updateSort] = useState("price low to high");
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        dropdownRef.current.classList.add("open");
      } else {
        dropdownRef.current.classList.remove("open");
      }
    }
  }, [isOpen]);

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <button onClick={handleDropdownClicked}>
        <p>{"Sort by: " + sort}</p>
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ color: "#ffffff", fontSize: "16px" }}
        />
      </button>
      <div className="Menu">
        <button onClick={() => {
          updateSort("price low to high");
          dispatch(sortLowToHigh());
          setIsOpen(false);
        }}>
          <p>price low to high</p>
        </button>
        <button onClick={() => {
          updateSort("price high to low");
          dispatch(sortHighToLow());
          setIsOpen(false);
        }}>
          <p>price high to low</p>
        </button>
        <button onClick={() => {
          updateSort("highly rated");
          dispatch(sortHighlyRated());
          setIsOpen(false);
        }}>
          <p>highly rated</p>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
