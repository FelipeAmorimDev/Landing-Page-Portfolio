import React from 'react'
import HabilidadeItem from './HabilidadeItem'

const ProjectItem = ({ title, habilidades, alt, src }) => {
  const habilidadesArray = habilidades.split(" ")

  return (
    <li className="project__item">
      <picture className="project__photo">
        <div className="project__overlayer">
          <a href="#" className="project__link">VIEW PROJECT</a>
          <a href="#" className="project__link">VIEW CODE</a>
        </div>
        <source media="(min-width: 768px)" srcset={src} />
        <img src={src.replace("large", "small")} alt={alt} />
      </picture>
      <h3 className="project__title">{title}</h3>
      <ul className="project__habilidades">
        {habilidadesArray.map((item, index) => {
          return <HabilidadeItem title={item} key={index} />
        })}
      </ul>
    </li>
  )
}

export default ProjectItem