import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const[menu,setMenu]=useState("")
  const navigate = useNavigate();
  const {getTotalCartAmount}=useContext(StoreContext)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleNavClick = (sectionId, menuName) => {
    setMenu(menuName);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  }

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
        <a onClick={()=>handleNavClick("home", "home")} className={menu==="home"?"active":""}>home</a>
        <a onClick={()=>handleNavClick("explore-menu", "menu")} className={menu==="menu"?"active":""}>menu</a>
        <a onClick={()=>handleNavClick("app-download", "mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a onClick={()=>handleNavClick("footer", "contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=''/>
        <div className='navbar-search-icon'>
            <Link to="/cart"><img src={assets.basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
