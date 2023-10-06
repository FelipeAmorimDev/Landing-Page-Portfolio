import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsList = () => {
  return (
    <ul className="projects__list">
      <ProjectItem
        title="DESIGN PORTFOLIO"
        habilidades="HTML CSS"
        alt="DESIGN PORTFOLIO"
        src="./images/thumbnail-project-1-large.webp" />
      <ProjectItem
        title="E-LEARNING LANDING PAGE"
        habilidades="HTML CSS"
        alt="E-LEARNING LANDING PAGE"
        src="./images/thumbnail-project-2-large.webp" />
      <ProjectItem
        title="TODO WEB APP"
        habilidades="HTML CSS JAVASCRIPT"
        alt="TODO WEB APP"
        src="./images/thumbnail-project-3-large.webp" />
      <ProjectItem
        title="ENTERTAINMENT WEB APP"
        habilidades="HTML CSS JAVASCRIPT"
        alt="ENTERTAINMENT WEB APP"
        src="./images/thumbnail-project-4-large.webp" />
      <ProjectItem
        title="MEMORY GAME"
        habilidades="HTML CSS JAVASCRIPT"
        alt="MEMORY GAME"
        src="./images/thumbnail-project-5-large.webp" />
      <ProjectItem
        title="ART GALLERY SHOWCASE"
        habilidades="HTML CSS JAVASCRIPT"
        alt="ART GALLERY SHOWCASE"
        src="./images/thumbnail-project-6-large.webp" />
    </ul>
  )
}

export default ProjectsList