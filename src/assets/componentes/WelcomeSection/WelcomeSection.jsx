import React from 'react'
import './WelcomeSection.css'
import DescriptionContainer from './DescriptionContainer'
import Hero from './Hero'

const WelcomeSection = () => {
  return (
    <section className='welcome__bg' aria-labelledby='welcome__title'> 
      <div className='welcome__container'>
      <DescriptionContainer/>
       <Hero />
      </div>
     </section>
  )
}

export default WelcomeSection