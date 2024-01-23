import React from 'react'
import facecard from "../images/Group 77.png"
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
      <div className='herosub'>
      <img src={facecard} alt="facecard"></img>
      </div>
    <div className='subhero'>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
    </div>
  )
}

export default Hero;