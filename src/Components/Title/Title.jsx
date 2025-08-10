import React from 'react'
import "./Title.css"

const Title = ({title,subtitle,clz}) => {
  return (
    <div className={clz}>
      <div className='title'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
    </div>
    </div>
  )
}

export default Title
