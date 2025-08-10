import React from 'react'
import "./About.css"
import aboutpic from "../../assets/about.png"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutpic} alt="" />
      </div>
      <div className="about-right">
        <h3>Good To Know More</h3>
        <h1>ABOUT US</h1>
        <p>vw constructions, a major construction company located in Aheliyagoda, has been providing services to a large number of people for more than 25 years and is still providing services today.
        </p>
        <p>It is unique that this is the only contracting company in the area, consisting of senior employees and engineers with more than 10 years of experience in the construction industry.
        </p>
        <p>This is the only place you should visit to build your dream home. Come let us build your dream home.</p>
      </div>
    </div>
  )
}

export default About
