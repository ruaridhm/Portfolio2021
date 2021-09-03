import React from "react"
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

const FilterWarning = styled.h3`
  color: #37319b;
  text-align: center;
`

const Projects = ({ filteredSkills }) => {
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
    const skillArr = []

    for (var i in filteredSkills) {
      if (filteredSkills[i] === true) {
        skillArr.push(i)
      }
    }
    projects.forEach(project => {
      if (skillArr.every(elem => project.stack.includes(elem))) {
        filteredProjects.push(project)
      }
    })
    if (FilteredProjects.length === 0) {
      return <FilterWarning>No projects match your filter!</FilterWarning>
    } else {
      return filteredProjects.map((project, count) => (
        <ProjectContainer key={count} project={project} />
      ))
    }
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
