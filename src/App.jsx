import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
      <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About/>
        <Title title="OUR SERVICES" subtitle="What We Offer" clz="serv"/>
        <Services/>
        <Title title="GALLERY" subtitle="On Going Projects" clz="gal"/>
        <Gallery/>

        <Contact/>
        <Footer/>
    </div>
      </>


  )
}

export default App
