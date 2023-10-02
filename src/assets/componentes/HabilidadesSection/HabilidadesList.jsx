import React from 'react'
import HabilidadeItem from './HabilidadeItem'

const HabilidadesList = () => {
  return (
    <ul className="habilidades__list">
      <HabilidadeItem title="HTML" experiencia="4 Years Experience"/>
      <HabilidadeItem title="CSS" experiencia="4 Years Experience"/>
      <HabilidadeItem title="Javascript" experiencia="4 Years Experience"/>
      <HabilidadeItem title="Accessibility" experiencia="4 Years Experience"/>
      <HabilidadeItem title="React" experiencia="3 Years Experience"/>
      <HabilidadeItem title="Sass" experiencia="3 Years Experience"/>
    </ul>
  )
}

export default HabilidadesList