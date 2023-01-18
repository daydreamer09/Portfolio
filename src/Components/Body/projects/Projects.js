import React from 'react'
import Seperator from '../../common/seperator/Seperator';
import { ProjectData } from '../../data/projects';
import ProjectCard from './Project-card';
import './Projects.css'

function Projects() {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Seperator />
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project => {
          return <ProjectCard project={project}/>
        }))}
      </div>
    </div>
  )
}

export default Projects
