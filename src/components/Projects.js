import React from "react"
import ProjectContainer from "./ProjectContainer"
import { projects } from "../ProjectList"
import styled from "styled-components"

const ProjectsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 2em;
`

const Projects = ({ filteredSkills, setFilteredSkills }) => {
  return (
    <section id="projects">
      <h2>&lt;projects&gt;</h2>
      <ProjectsGrid>
        {projects.map((project, count) => (
          <ProjectContainer key={count} project={project} />
        ))}
      </ProjectsGrid>

      <h2>&lt;/projects&gt;</h2>
    </section>
  )
}

export default Projects
