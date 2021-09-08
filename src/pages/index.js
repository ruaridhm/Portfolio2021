import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SkillSet from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact/Contact"
import BackgroundLayer from "../components/BackgroundLayer"
import { Helmet } from "react-helmet"
import ReactGA from "react-ga"

const Home = () => {
  useEffect(() => {
    ReactGA.initialize("G-X5FRHZRG2S")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

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
      <Helmet>
        <title>Ruaridh McGuckin Portfolio</title>
        <html lang="en" />
        <meta name="description" content="My personal portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="ruaridh mcguckin, ruaridh, portfolio, developer, front-end, web developer,front end, web developer, ,frontend, web development, web app, web site development, web app development, freelance web developer, web developer portfolio, react developer, gatsby developer, react, gatsby, javascript developer, dublin, ireland, responsive web developer,  "
        />
      </Helmet>
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
