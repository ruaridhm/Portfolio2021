import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  padding: 0 1em 1em 1em;
  margin: 1em;
  width: 50%;
  align-self: center;
`
const FormTitle = styled.h3`
  color: #37319b;
`

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`
const HoneyPot = styled.input`
  display: none;
`
const FormTextArea = styled.textarea`
  resize: none;
`

const SubmitButton = styled.button`
  padding: 1em;
  background: linear-gradient(to right, #37319b 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.2s ease-out;
  width: 50%;
  align-self: center;
  border-color: #37319b;
  &:hover {
    background-position: left bottom;
  }
`
const SubmitButtonText = styled.span`
  transition: all 0.2s ease-out;
  ${SubmitButton}:hover & {
    color: white;
  }
`

const ContactForm = () => {
  return (
    <StyledForm method="POST" action="https://formspree.io/f/mvoddqbv">
      <FormTitle>Get in touch</FormTitle>

      {/* <HoneyPot type="text" name="_gotcha" /> */}
      <FormLabel>
        Email
        <input type="email" name="_replyto" required />
      </FormLabel>
      <FormLabel>
        Message
        <FormTextArea name="message" rows="5" required />
      </FormLabel>
      <SubmitButton type="submit">
        <SubmitButtonText>Send</SubmitButtonText>
      </SubmitButton>
    </StyledForm>
  )
}

export default ContactForm
