import React, { useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SkillSet from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import BackgroundLayer from "../components/BackgroundLayer"

const Home = () => {
  const [filteredSkills, setFilteredSkills] = useState({
    HTML: false,
    CSS: false,
    JavaScript: false,
    React: false,
    TypeScript: false,
    "Material UI": false,
    "Styled Components": false,
    MongoDb: false,
    Git: false,
    Node: false,
    Express: false,
    Gatsby: false,
  })

  return (
    <Layout>
      <Hero />
      <BackgroundLayer>
        <SkillSet
          filteredSkills={filteredSkills}
          setFilteredSkills={setFilteredSkills}
        />
        <Projects filteredSkills={filteredSkills} />

        <Contact />
      </BackgroundLayer>
    </Layout>
  )
}

export default Home
