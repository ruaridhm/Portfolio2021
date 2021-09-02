import React from "react"
import styled from "styled-components"
import { GithubOutline, EmailOutline } from "@styled-icons/evaicons-outline"
import { Linkedin } from "@styled-icons/boxicons-logos"
import Scroll from "./Scroll"

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SocialLink = styled.a`
  margin: 1em;
  height: 50px;
  width: 50px;
  transition: transform 0.2s linear;
  &:hover {
    transform: translateY(-7px);
  }
`

export const GithubIcon = styled(GithubOutline)`
  color: #211f1f;
`
const LinkedinIcon = styled(Linkedin)`
  color: #0a66c2;
`

const EmailIcon = styled(EmailOutline)`
  color: #ffd700;
`
const Contact = () => {
  return (
    <Section id="contact">
      <h2>&lt;contact&gt;</h2>
      <SocialLinks>
        <SocialLink href="http://www.github.com/ruaridhm" target="_blank">
          <GithubIcon />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/ruaridh-mcguckin-b09809189/"
          target="_blank"
        >
          <LinkedinIcon />
        </SocialLink>

        <SocialLink href="mailto:ruaridh.mcguckin@gmail.com?subject=Important!">
          <EmailIcon />
        </SocialLink>
      </SocialLinks>
      <h2>&lt;/contact&gt;</h2>
      <Scroll showBelow={250} />
    </Section>
  )
}

export default Contact
