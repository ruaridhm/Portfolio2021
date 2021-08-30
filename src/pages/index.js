import React, { useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SkillSet from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import BackgroundLayer from "../components/BackgroundLayer"

const Home = () => {
  const [filteredSkills, setFilteredSkills] = useState([])

  return (
    <Layout>
      <Hero />
      <BackgroundLayer>
        <SkillSet
          filteredSkills={filteredSkills}
          setFilteredSkills={setFilteredSkills}
        />
        <Projects
          filteredSkills={filteredSkills}
          setFilteredSkills={setFilteredSkills}
        />

        <Contact />
      </BackgroundLayer>
    </Layout>
  )
}

export default Home
