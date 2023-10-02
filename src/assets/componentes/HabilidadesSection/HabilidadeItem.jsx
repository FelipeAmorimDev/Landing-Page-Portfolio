import React from 'react'

const HabilidadeItem = ({title,experiencia}) => {
  return (
    <li className="habilidade__item">
        <h2 className="habilidade__title">{title}</h2>
        <span className="habilidade__experience">{experiencia}</span>
      </li>
  )
}

export default HabilidadeItem