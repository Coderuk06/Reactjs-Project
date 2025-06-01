import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from '../../assets/menu-icon.png'
import { Link, Element } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

const [moibleMenu, setMobileMenu] = useState(false)

  const toggleMenu = () =>{
        moibleMenu ?  setMobileMenu(false) : setMobileMenu(true) 
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={moibleMenu ? "" : "heid-nobile-menu"}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} className="links"> Home</Link> </li>
        <li> <Link to='program' smooth={true} offset={-260} duration={500} className="links"> Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} className="links"> About us</Link> </li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} className="links">Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} className="links">Testimonials</Link></li>
        <li>
          <Link className="btn" to='contact' smooth={true} offset={-260} duration={500} >Contact'us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
