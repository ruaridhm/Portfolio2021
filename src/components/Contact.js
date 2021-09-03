import React from "react"
import styled from "styled-components"
import { GithubOutline, EmailOutline } from "@styled-icons/evaicons-outline"
import { Linkedin } from "@styled-icons/boxicons-logos"
import Scroll from "./Scroll"
import { StyledLabel } from "./Skills"
import ContactForm from "./ContactForm"

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
  color: var(--clr-github);
`
const LinkedinIcon = styled(Linkedin)`
  color: var(--clr-linkedin);
`
const Contact = () => {
  return (
    <Section id="contact">
      <StyledLabel>&lt;contact&gt;</StyledLabel>
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
      </SocialLinks>
      <ContactForm />
      <StyledLabel>&lt;/contact&gt;</StyledLabel>
      <Scroll showBelow={250} />
    </Section>
  )
}

export default Contact
