import '../Navbar/Navbar-style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false); // Close the menu when a link is clicked
  };
  
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className="branding">LOGO.</Link>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/home" className="nav-link" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link" onClick={handleLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" onClick={handleLinkClick}>Career</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link" onClick={handleLinkClick}>About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link" onClick={handleLinkClick}>Contact us</Link>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`} 
            onClick={handleToggle}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>     
      </header>

    </>
  )
}

export default Navbar