import React from 'react'
import "./Services.css"
import service1 from "../../assets/program.png"
import service2 from "../../assets/program1.png"
import service3 from "../../assets/program2.png"

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service1} alt="" />
        <div className="caption">
            <h3>Renovation</h3>
        </div>
      </div>
      <div className="service">
        <img src={service2} alt="" />
        <div className="caption">
            <h3>Planning</h3>
        </div>
      </div>
      <div className="service">
        <img src={service3} alt="" />
        <div className="caption">
            <h3>Building</h3>
        </div>
      </div>
    </div>
  )
}

export default Services
