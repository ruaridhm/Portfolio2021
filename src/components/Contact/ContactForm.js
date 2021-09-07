import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  padding: 0 1em 1em 1em;
  margin: 1em;
  align-self: center;
  width: 50%;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
`
const FormTitle = styled.h3`
  color: var(--clr-mainColor);
`
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`
const FormEmailInput = styled.input`
  outline: none;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-radius: 5px;
  border: 2px solid var(--clr-black);
  &:focus {
    border: 2px solid var(--clr-mainColor);
    transition: 0.2s ease-in;
  }
`

const FormTextArea = styled.textarea`
  resize: none;
  outline: none;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-radius: 5px;
  border: 2px solid var(--clr-black);
  &:focus {
    border: 2px solid var(--clr-mainColor);
    transition: 0.2s ease-in;
  }
`
const SubmitButton = styled.button`
  padding: 1em;
  background: linear-gradient(
    to right,
    var(--clr-mainColor) 50%,
    var(--clr-white) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.2s ease-out;
  width: 50%;
  align-self: center;
  border: 2px solid var(--clr-mainColor);

  &:hover,
  :focus {
    background-position: left bottom;
  }
`
const SubmitButtonText = styled.span`
  transition: all 0.2s ease-out;
  ${SubmitButton}:hover & {
    color: var(--clr-white);
  }
  ${SubmitButton}:focus & {
    color: var(--clr-white);
  }
`

const ContactForm = () => {
  return (
    <StyledForm method="POST" action="https://formspree.io/f/mvoddqbv">
      <FormTitle>Get in touch</FormTitle>
      <FormLabel>
        Email
        <FormEmailInput type="email" name="_replyto" required />
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
