import React from "react"
import styled, { css } from "styled-components"

const SkillContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
`
const SkillListItem = styled.li`
  padding: 0 1em;
`

const StyledSkill = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 0.5em;
  margin: 0.5em auto;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  transition: transform 0.2s linear;
  width: 7.5rem;
  height: 6rem;
  background-color: transparent;
  &:hover {
    transform: translateY(-2px);
    color: var(--clr-mainColor);
    border-color: var(--clr-mainColor);
  }
  ${props =>
    props.active &&
    css`
      color: var(--clr-mainColor);
      border: 1px solid var(--clr-mainColor);
    `};
`
export const StyledLabel = styled.h2`
  color: var(--clr-mainColor);
`
const StyledImage = styled.img`
  height: 50px;
  width: 50px;
  padding-bottom: 0.5em;
`

const Skill = ({ onClick, children, active }) => {
  return (
    <StyledSkill onClick={onClick} active={active}>
      {children}
    </StyledSkill>
  )
}

const skills = [
  { src: "/html.svg", title: "HTML" },
  { src: "/css.svg", title: "CSS" },
  { src: "/javascript.svg", title: "JavaScript" },
  { src: "/react.svg", title: "React" },
  { src: "/typeScript.svg", title: "TypeScript" },
  { src: "/material-ui.svg", title: "Material-UI" },
  { src: "/styled-components.svg", title: "Styled-Components" },
  { src: "/mongodb.svg", title: "MongoDb" },
  { src: "/git.svg", title: "Git" },
  { src: "/node.svg", title: "Node" },
  { src: "/express.svg", title: "Express" },
  { src: "/gatsby.svg", title: "Gatsby" },
]

const Skills = ({ filteredSkills, setFilteredSkills }) => {
  const handleSetSkill = skill => {
    setFilteredSkills(prevState => ({
      [skill]: !prevState[skill],
    }))
  }

  return (
    <section id="skillset">
      <StyledLabel>&lt;skills&gt;</StyledLabel>
      <SkillContainer>
        {skills.map((skill, count) => (
          <SkillListItem key={count}>
            <Skill
              onClick={() => {
                handleSetSkill(skill.title)
              }}
              active={filteredSkills[skill.title]}
            >
              <StyledImage src={skill.src} alt={skill.title} />
              {skill.title}
            </Skill>
          </SkillListItem>
        ))}
      </SkillContainer>
      <StyledLabel>&lt;/skills&gt;</StyledLabel>
    </section>
  )
}

export default Skills
