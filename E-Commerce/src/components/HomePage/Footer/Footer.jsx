import { Link } from 'react-router-dom';
import './styles.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react';
function handleClick(){
  window.location.href();
}
export default function Footer() {
  return (
    <footer>
      <section className="top">
        <h2>GLITCHWARE</h2>
        <ul>
          <li>
            <h3>Products</h3>
            <Link to="/products/playstation" className="footerItems" onClick={handleClick}>Playstation</Link>
            <Link to="/products/xbox" className="footerItems" onClick={handleClick}>X-Box</Link>
            <Link to="/products/accessories" className="footerItems" onClick={handleClick}>Accessories</Link>
            <Link to="/products/giftcards" className="footerItems" onClick={handleClick}>Gift Cards</Link>
            <Link to="/products/monitors" className="footerItems" onClick={handleClick}>Monitors</Link>
          </li>
          <li>
            <h3>Pre-PC Builds</h3>
            <Link to="/value-deals" className="footerItems">Value Deals</Link>
            <Link to="/smash-deals" className="footerItems">Smash Deals</Link>
            <Link to="/rapid-deals" className="footerItems">Rapid Deals</Link>
            <Link to="/xtreme-deals" className="footerItems">Xtreme Deals</Link>
          </li>
          <li>
            <h3>Information</h3>
            <Link to="/about-us" className="footerItems">About Us</Link>
            <Link to="/faqs" className="footerItems">FAQs</Link>
            <Link to="/contact-us" className="footerItems">Contact Us</Link>
            <Link to="/policies" className="footerItems">Policies</Link>
          </li>
          <li>
            <h3>Socials</h3>
            <Link to="/facebook" className="footerItems notfooter">
              <FaFacebookSquare className='social' />
            </Link>
            <Link to="/instagram" className="footerItems notfooter">
              <FaInstagramSquare className='social' />
            </Link>
            <Link to="/twitter" className="footerItems notfooter">
              <FaTwitterSquare className='social'/>
            </Link>
            <Link to="/linkedin" className="footerItems notfooter">
              <FaLinkedin className='social'/>
            </Link> 
          </li>
        </ul>
      </section>

      <section className="bottom">© 2024 GLITCHWARE</section>
    </footer>
  );
}
