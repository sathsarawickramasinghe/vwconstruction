import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/fevi.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

function Navbar() {

  const [mobile,setMobile] = useState(false)
  const toggleMenu = () =>{
    mobile ? setMobile(false) : setMobile(true)
  }

  return (
      <nav>
        <img src={logo} alt="logo" className='logo'   />
        <ul className={mobile? "" : "hide-mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500} >About</Link></li>
            <li><Link to='serv' smooth={true} offset={0} duration={500} >Services</Link></li>
            <li><Link to='gal' smooth={true} offset={0} duration={500} >Projects</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className="btn">Contact</Link></li>
            
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </nav>

  )
}

export default Navbar
