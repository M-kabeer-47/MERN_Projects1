import image1 from "./rtx4070.png";
import image2 from "./rtx3060.png";
import image3 from "./rtx2060.png";
import image4 from "./boostjaguarCase.png";
import image5 from "./easeMonitor.png";
import image6 from "./gloriusmodelD.png";
import image7 from "./amdryzen53600.png";
import image8 from "./i512th.png";
import './featuredProducts.css';
import { useState } from "react";
import { Link } from "react-router-dom";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "react-fontawesome";
import HomeProducts from "../../HomeProducts";

const featuredProducts = [
  {
    title: "GeForce RTX™ 4070 GAMING X SLIM WHITE 12G",
    category: "Graphic Cards",
    price: "Rs225,000",
    image: image1,
  },
  {
    title: "ZOTAC GAMING GeForce RTX 3060 Ti Twin Edge",
    category: "Graphic Cards",
    price: "Rs85,000",
    image: image2,
  },
  {
    title: "RTX 2060 SUPER",
    category: "Graphic Cards",
    price: "Rs65,000",
    image: image3,
  },
  {
    title: "BOOST JAGUAR BLACK",
    category: "Casing",
    price: "Rs10,999",
    image: image4,
  },
  {
    title: "EASE O22V75 22″ Full HD",
    category: "Monitors",
    price: "Rs29,500",
    image: image5,
  },
  {
    title: "Glorious Model D RGB Gaming Mouse Matte Black",
    category: "Mouse",
    price: "Rs14,500",
    image: image6,
  },
  {
    title: "AMD Ryzen 5 3600 Tray",
    category: "Processors",
    price: "Rs22,000",
    image: image7,
  },
  {
    title: "Intel Core i5-12400F Processor TRAY PACK",
    category: "Processors",
    price: "Rs36,500",
    image: image8,
  },
];

export default function FeaturedProduct() {
  

  return (
    <div className="featuredProductsDiv">
      <h2>FEATURED PRODUCTS</h2>
      <div className="featuredProducts">
        {featuredProducts.map((product, index) => (
          <HomeProducts
          key={index}
          product={product}
          index={index}
           />
        ))}
      </div>
    </div>
  );
}
