import React from 'react'
import "./Contact.css"
import phone from "../../assets/phone-icon.png"
import mail from "../../assets/mail-icon.png"
import location from "../../assets/location-icon.png"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="left-col">
        <h3>Lets Get In Touch</h3>
        <h1>Contact Us</h1>
    </div>
      <div className="right-col">
        <ul>
            <li><img src={mail} alt="" />contact@vwconstructions.com</li>
            <li><img src={phone} alt="" />01123654862</li>
            <li><img src={location} alt="" />100/C , Main Street, Eheliyagoda</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
