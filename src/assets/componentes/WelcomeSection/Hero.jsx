import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <picture className='welcome__hero'>
      <source media="(min-width: 1000px)" srcSet="./src/assets/img/image-profile-desktop.webp" />
      <source media="(min-width: 767px)" srcSet="./src/assets/img/image-profile-tablet.webp" />
      <img src="./src/assets/img/image-profile-mobile.webp" alt="Adam Keyes" />
    </picture>
  )
}

export default Hero