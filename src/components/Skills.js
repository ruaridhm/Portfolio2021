import React from "react"
import styled, { css } from "styled-components"

const SkillContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 450px;
  margin: 0 auto;
`

const StyledSkill = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.5em 1em;
  margin: 0.5em auto;
  text-align: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  transition: transform 0.2s linear;
  &:hover {
    transform: translateY(-7px);
  }
  ${props =>
    props.active &&
    css`
      color: #37319b;
      /* border: 1px solid #37319b; */
      box-shadow: 0 0 2px #37319b inset;
    `};
`
export const StyledLabel = styled.h2`
  color: #37319b;
`

const Skill = ({ onClick, children, active }) => {
  return (
    <StyledSkill onClick={onClick} active={active}>
      {children}
    </StyledSkill>
  )
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Material UI",
  "Styled Components",
  "MongoDb",
  "Git",
  "Node",
  "Express",
  "Gatsby",
]

const Skills = ({ filteredSkills, setFilteredSkills }) => {
  const handleSetSkill = skill => {
    setFilteredSkills(prevState => ({
      ...prevState,
      [skill]: !prevState[skill],
    }))
  }

  return (
    <section id="skillset">
      <StyledLabel>&lt;skillset&gt;</StyledLabel>
      <SkillContainer>
        {skills.map((skill, count) => (
          <Skill
            key={count}
            onClick={() => {
              handleSetSkill(skill)
            }}
            active={filteredSkills[skill]}
          >
            {skill}
          </Skill>
        ))}
      </SkillContainer>
      <StyledLabel>&lt;/skillset&gt;</StyledLabel>
    </section>
  )
}

export default Skills
