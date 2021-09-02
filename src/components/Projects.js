import React, { useState } from "react"
import ProjectContainer from "./ProjectContainer"
import { projects } from "../ProjectList"
import styled from "styled-components"
import { StyledLabel } from "./Skills"

const ProjectsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 2em;
`

const Projects = ({ filteredSkills }) => {
  // const [filteredProjects, setFilteredProjects] = useState([...projects])
  var notFiltered = true

  for (var i in filteredSkills) {
    if (filteredSkills[i] === true) {
      notFiltered = false
      break
    }
  }

  const AllProjects = () => {
    return projects.map((project, count) => (
      <ProjectContainer key={count} project={project} />
    ))
  }
  const FilteredProjects = () => {
    const filteredProjects = []
    projects.forEach(project => {
      let techIncluded = 0
      let skillCount = 0
      project.stack.forEach(tech => {
        if (filteredSkills[tech] === true) {
          techIncluded += 1
        }
        filteredSkills.forEach(skill => {
          let count = 0
          if (skill === true) {
            count++
          }
          return count
        })
      })
      if (techIncluded === skillCount) {
        filteredProjects.push(project)
      } else {
        return
      }
    })
    return filteredProjects.map((project, count) => (
      <ProjectContainer key={count} project={project} />
    ))
  }

  return (
    <section id="projects">
      <StyledLabel>&lt;projects&gt;</StyledLabel>
      <ProjectsGrid>
        {notFiltered ? <AllProjects /> : <FilteredProjects />}
      </ProjectsGrid>

      <StyledLabel>&lt;/projects&gt;</StyledLabel>
    </section>
  )
}

export default Projects
