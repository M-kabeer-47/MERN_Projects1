import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar2() {
    const count = 2;
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    const handleHamburgerClick = () => {
        setIsSidebarOpen(true);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest('.sidebar') || event.target.closest('.hamburger')) {
            return;
        }
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isSidebarOpen]);

    return (
        <>
            <div className="navbar">
                <GiHamburgerMenu 
                    className="hamburger"
                    style={{ color: "white", fontSize: "20px" }} 
                    onClick={handleHamburgerClick} 
                />
                <Sidebar isOpen={isSidebarOpen} />
                <div className="logo">
                    <Link to={"/"}>
                        <h2>GlitchWare</h2>
                    </Link>
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
        </>
    );
}
