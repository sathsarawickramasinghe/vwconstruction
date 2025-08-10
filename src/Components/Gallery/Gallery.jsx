import React from 'react'
import "./Gallery.css"
import gallery1 from "../../assets/gallery1.png"
import gallery2 from "../../assets/gallery2.png"
import gallery3 from "../../assets/gallery3.png"
import gallery4 from "../../assets/gallery4.png"

const Gallery = () => {
  return (
    <div className='galleries'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <div className="details">
                <h2>Colombo</h2>
                <p>Pipeline Project</p>
            </div>
        </div>
        <div className="gallery">
            <img src={gallery2} alt="" />
            <div className="details">
                <h2>Rathnapura</h2>
                <p>Excavater Construction</p>
            </div>
        </div>
        <div className="gallery">
            <img src={gallery3} alt="" />
            <div className="details">
                <h2>Kandy</h2>
                <p>Hotel Project</p>
            </div>
        </div>
        <div className="gallery">
            <img src={gallery4} alt="" />
            <div className="details">
                <h2>Colombo</h2>
                <p>Crane Project</p>
            </div>
        </div>
      
    </div>
  )
}

export default Gallery
