import React from 'react'
import { StyledLabel } from "./Skills"
import ExperienceContainer from './ExperienceContainer'
import { experience } from "../ExperienceList"
const Experience = () => {
  return (
    <section id='experience'>
        <StyledLabel>&lt;experience&gt;</StyledLabel>
        {experience.map((item, index) => (
      <ExperienceContainer key={index} experience={item} />
    ))}
        
        <StyledLabel>&lt;/experience&gt;</StyledLabel>
    </section>
  )
}

export default Experience