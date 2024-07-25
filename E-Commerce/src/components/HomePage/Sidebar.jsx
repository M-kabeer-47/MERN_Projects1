import { faMagnifyingGlass, faHeart, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Sidebar = (props) => {
  const count = 2;
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  const hardware = [
    "Processors",
    "Power supply",
    "Cases",
    "Graphic Cards",
    "Motherboards",
    "RAMS",
    "HDDs",
    "SSDs",
    "Monitors",
  ];
  const accessories = [
    "Keyboards",
    "Mouse",
    "Headphones",
    "Cables",
    "Microphones",
    "Webcams",
    "Speakers",
  ];
  const console = [
    "Playstation",
    "Xbox",
    "Nintendo",
    "PS Games",
    "X-Box Games",
    "Gift cards",
  ];
  const allOptions = [...hardware, ...accessories, ...console];
  const deals = ["Value deals", "Smash deals", "Rapid deals", "Xtreme deals"];

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const subMenu = button.nextElementSibling;
    const isActive = button.classList.contains("active");

    // Close all sub-menus and remove 'active' class from all buttons
    document.querySelectorAll(".sub-menu").forEach((menu) => {
      menu.style.height = "0px";
    });
    document.querySelectorAll(".sidebar ul button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Toggle the clicked button's sub-menu
    if (!isActive) {
      subMenu.style.height = `${subMenu.querySelector("ul").clientHeight}px`;
      button.classList.add("active");
    }
  };

  useEffect(() => {
    if (!props.isOpen) {
      // Close all sub-menus when the sidebar is closed
      document.querySelectorAll(".sub-menu").forEach((menu) => {
        menu.style.height = "0px";
      });
      document.querySelectorAll(".sidebar ul button").forEach((btn) => {
        btn.classList.remove("active");
      });
    }
  }, [props.isOpen]);

  return (
    <aside className={`sidebar ${props.isOpen ? 'active' : ''}`}>
      <div className="upperSidebar">
        <header>
          <SearchBar 
          expanded={false}
          />
        </header>
        <ul>
          <li>
            <button type="button">

              <p>Home</p>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleButtonClick}>
            <div className="buttonDiv">
              <p>Products</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff", fontSize: "16px" }}
              />
              </div>
            </button>
            <div className="sub-menu">
              <ul>
                {allOptions.map((option, index) => (
                  <p key={index}>
                    <Link to={`/${option.replace(/\s+/g, "-").toLowerCase()}`}>
                      <button key={index} type="button">
                        {option}
                      </button>
                    </Link>
                  </p>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <button type="button" onClick={handleButtonClick}>
              <div className="buttonDiv">
              <p>Pre Build PC</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff", fontSize: "16px" }}
              />
              </div>
              
            </button>
            <div className="sub-menu">
              <ul>
                {deals.map((option, index) => (
                  <p key={index}>
                    <Link to={`/${option.replace(/\s+/g, "-").toLowerCase()}`}>
                      <button key={index} type="button">
                        {option}
                      </button>
                    </Link>
                  </p>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="lowerSidebar">
        <Link className="link">
          <div className="iconText">
            <p>Wishlist</p>
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
          </div>
        </Link>
        <Link className="login">
          <p>Login/Sign Up</p>
        </Link>
        <Link className="login">
          <p style={{ position: "relative", left: "-11px" }}>Contact Us</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
