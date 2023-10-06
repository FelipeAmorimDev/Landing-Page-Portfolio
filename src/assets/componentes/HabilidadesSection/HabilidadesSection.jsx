import React from 'react'
import HabilidadesList from './HabilidadesList'
import './HabilidadesSection.css'
import LineSeparate from '../gerais/LineSeparate'

const HabilidadesSection = () => {
  return (
    <section className="habilidades__bg" aria-label='Habilidades Section'>
      <LineSeparate />
      <div className="habilidades__container">
        <HabilidadesList />
      </div>
      <LineSeparate />
    </section>
  )
}

export default HabilidadesSection