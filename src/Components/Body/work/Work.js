import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import { WorkData } from '../../data/work'
import WorkCard from './Work-card';
import './Work.css'

function Work() {
  const data = WorkData;
  return (
    <div className='work'>
      <Seperator />
      <label className='section-title'>Work</label>
      <div className="work-list">
        {data.map( (item) => {
          return <WorkCard item={item}/>
        })}
      </div>
    </div>
  )
}

export default Work
