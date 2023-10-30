import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from "react-scroll"
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className = "navbar">
        <img  src={logo} alt="Logo" className = "logo" />
        <div className="desktopMenu">
            <Link activeClass = "active" to = "intro" spy = {true} smooth = {true} offset = {-100} duration={500} className="desktopMenuItemList">Home</Link>
            <Link activeClass = "active" to = "skills" spy = {true} smooth = {true} offset = {-50} duration={500}  className="desktopMenuItemList">About</Link>
            <Link activeClass = "active" to = "works" spy = {true} smooth = {true} offset = {-50} duration={500}  className="desktopMenuItemList">Portfolio</Link>
            <Link activeClass = "active" to = "clients" spy = {true} smooth = {true} offset = {-50} duration={500}  className="desktopMenuItemList">Client</Link>

        </div>
        <button className = "desktopMenuBtn"onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src= {contact} alt="contact" className="desktopMenuImg" />
        Contact Me
        </button>
        <img  src={menu} alt="Menu" className = "mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu"style = {{display:showMenu?'flex':'none'}} >
            <Link activeClass = "active" to = "intro" spy = {true} smooth = {true} offset = {-100} duration={500} className="mobMenuItemList" onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass = "active" to = "skills" spy = {true} smooth = {true} offset = {-50} duration={500}  className="mobMenuItemList" onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass = "active" to = "works" spy = {true} smooth = {true} offset = {-50} duration={500}  className="mobMenuItemList" onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass = "active" to = "clients" spy = {true} smooth = {true} offset = {-50} duration={500}  className="mobMenuItemList" onClick={() =>setShowMenu(false)}>Client</Link>
            <Link activeClass = "active" to = "contacts" spy = {true} smooth = {true} offset = {-50} duration={500}  className="mobMenuItemList" onClick={() =>setShowMenu(false)}>Client</Link>

        </div>
    </nav>

  )
}

export default Navbar