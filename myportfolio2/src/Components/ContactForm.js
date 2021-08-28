import React, { useContext } from "react";

import styled from "styled-components";
import LangContext from "../Context/LangContext.js";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 50%;
  width: 35%;
  margin-top: 5rem;
  transition: width 0.5s;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Input = styled.input`
  font-size: 1.08rem;

  height: 2rem;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  background-color: #f6f6f6aa;
  outline: none;
  color: #1d1e1c;

  &::placeholder {
    color: #147e92;
  }
`;

const Message = styled.textarea`
  font-size: 1.08rem;
  resize: none;
  height: 50%;
  width: 100%;
  border: none;
  background-color: #f6f6f6aa;
  outline: none;
  padding: 0.5rem;
  color: #1d1e1c;
  &::placeholder {
    color: #147e92;
  }
`;
const Submit = styled.button`
  background: #f0f0f0;
  font-size: 1.08rem;
  /* padding: 0.5rem; */
  text-align: center;
  height: 3rem;
  width: 10rem;
  border: 2px solid #147e92;
  cursor: pointer;
  margin: 0.5rem;
  align-self: flex-end;
`;
function ContactForm() {
  const { text } = useContext(LangContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <label htmlFor="Name">{text.name}</label>
      <Input
        id="Name"
        placeholder={`🥰 ${text.your + " " + text.name}`}
        type="text"
      />
      <label htmlFor="Email">{text.email}</label>
      <Input
        id="Email"
        placeholder={`📧 ${text.your + " " + text.email}`}
        type="text"
      />
      <label htmlFor="Message">{text.message}</label>
      <Message
        placeholder={`✍🏼 ${text.your + " " + text.message}`}
        id="Message"
      />
      <Submit onClick={handleSubmit}>{`${text.send} 📤`}</Submit>
    </Form>
  );
}

export default ContactForm;
