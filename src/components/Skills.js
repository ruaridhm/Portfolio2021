import React from "react"
import styled, { css } from "styled-components"

const SkillContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
`
const SkillListItem = styled.li`
  padding: 0 1em;
`

const StyledSkill = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0.5em auto;
  text-align: center;
  border: 1px solid var(--clr-black);
  border-radius: 0.25rem;
  transition: transform 0.2s linear;
  &:hover {
    transform: translateY(-2px);
    color: var(--clr-mainColor);
    border-color: var(--clr-mainColor);
  }
  ${props =>
    props.active &&
    css`
      color: var(--clr-mainColor);
      border-color: var(--clr-mainColor);
    `};
`
export const StyledLabel = styled.h2`
  color: var(--clr-mainColor);
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
      <StyledLabel>&lt;skills&gt;</StyledLabel>
      <SkillContainer>
        {skills.map((skill, count) => (
          <SkillListItem>
            <Skill
              key={count}
              onClick={() => {
                handleSetSkill(skill)
              }}
              active={filteredSkills[skill]}
            >
              {skill}
            </Skill>
          </SkillListItem>
        ))}
      </SkillContainer>
      <StyledLabel>&lt;/skills&gt;</StyledLabel>
    </section>
  )
}

export default Skills
