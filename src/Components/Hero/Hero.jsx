import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
        <h2>Vw Constructions</h2>
        <p>VW Constructions is a popular and efficient construction company located in Eheliyagoda.Contact us now to responsibly and reliably build your dream home using modern machinery and know-how.</p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        
    </div>
  )
}

export default Hero
