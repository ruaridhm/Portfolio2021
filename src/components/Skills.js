import React from "react"
import styled from "styled-components"

const SkillContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 450px;
  margin: 0 auto;
`
const Skill = styled.li`
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
`

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
    console.log("handleSetSkill called")
    if (filteredSkills.includes(skill)) {
      console.log("true")
      console.log(skill)
      const skillIndex = filteredSkills.findIndex(element => element === skill)
      console.log(skillIndex)
      const newSkillArr = filteredSkills.splice(skillIndex, 1)
      console.log(newSkillArr)
      setFilteredSkills(newSkillArr)
    } else {
      console.log("else ,skill added")
      setFilteredSkills(prevState => [...prevState, skill])
    }
  }

  return (
    <section>
      <h2>&lt;skillset&gt;</h2>
      <SkillContainer>
        {skills.map((skill, count) => (
          <Skill
            key={count}
            onClick={() => {
              handleSetSkill(skill)
            }}
          >
            {skill}
          </Skill>
        ))}
      </SkillContainer>
      <h2>&lt;/skillset&gt;</h2>
    </section>
  )
}

export default Skills
