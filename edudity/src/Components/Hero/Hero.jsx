import React from 'react' 
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'




function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better word</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowlwdge, skills, and experiences needed to exel in the dynamic field of education </p>
        <button className='btn'> Explor More <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
