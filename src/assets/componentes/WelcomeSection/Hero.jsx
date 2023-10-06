import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <picture className='welcome__hero'>
      <source media="(min-width: 1000px)" srcSet="./images/image-profile-desktop.webp" />
      <source media="(min-width: 767px)" srcSet="./images/image-profile-tablet.webp" />
      <img src="./images/image-profile-mobile.webp" alt="Adam Keyes" />
    </picture>
  )
}

export default Hero