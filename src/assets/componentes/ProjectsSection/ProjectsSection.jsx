import React from 'react'
import ProjectsTop from './ProjectsTop'
import ProjectsList from './ProjectsList'
import './ProjectsSection.css'
const ProjectsSection = () => {
  return (
    <section className="projects__container" aria-labelledby='projects__title'>
      <ProjectsTop />
      <ProjectsList />
    </section>
  )
}

export default ProjectsSection