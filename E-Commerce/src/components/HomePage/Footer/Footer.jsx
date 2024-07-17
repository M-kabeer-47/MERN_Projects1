import { Link } from 'react-router-dom';
import './styles.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <section className="top">
        <h2>GLITCHWARE</h2>
        <ul>
          <li>
            <h3>Products</h3>
            <Link to="/playstation" className="footerItems">Playstation</Link>
            <Link to="/xbox" className="footerItems">X-Box</Link>
            <Link to="/accessories" className="footerItems">Accessories</Link>
            <Link to="/giftcards" className="footerItems">Gift Cards</Link>
            <Link to="/monitors" className="footerItems">Monitors</Link>
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
            <Link to="/facebook" className="footerItems">
              <FaFacebookSquare className='social' />
            </Link>
            <Link to="/instagram" className="footerItems">
              <FaInstagramSquare className='social' />
            </Link>
            <Link to="/twitter" className="footerItems">
              <FaTwitterSquare className='social'/>
            </Link>
            <Link to="/linkedin" className="footerItems">
              <FaLinkedin className='social'/>
            </Link>
          </li>
        </ul>
      </section>

      <section className="bottom">© 2024 GLITCHWARE</section>
    </footer>
  );
}
