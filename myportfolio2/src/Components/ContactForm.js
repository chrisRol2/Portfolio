import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import ContactFormContext from "../Context/ContactFormContext.js";
import LangContext from "../Context/LangContext.js";
import sendForm from "../Helpers/SendForm.js";

const emailExpression =
  /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i;
const nameExpression = /[A-Z-a-z-À-ÿ]/;

const textExpression = /[A-Z-a-z-À-ÿ]\s/;
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
  text-align: center;
  height: 3rem;
  width: 10rem;
  border: 2px solid #147e92;
  cursor: pointer;
  margin: 0.5rem;
  align-self: flex-end;
  ${({ unableSubmit }) =>
    !unableSubmit && "cursor: not-allowed; filter: grayscale(100%);"}
`;

function ContactForm() {
  const { text } = useContext(LangContext);
  const { setModalOpen, setIsSend } = useContext(ContactFormContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enable2Send, setEnable2Send] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enable2Send)
      sendForm(name, email, message, setModalOpen, setIsSend, clear);
    else console.log("no enviaras pa");
  };
  const clear = () => {
    document.getElementById("form").reset();
  };
  const handleChange = (e) => {
    if (e.target.name === "nameEMail") {
      if (nameExpression.test(e.target.value)) {
        setName(e.target.value);
        document.querySelector(".form__name").style.color = "inherit";
      } else {
        document.querySelector(".form__name").style.color = "#F03A17";
      }
    }
    if (e.target.name === "emailEMail") {
      if (emailExpression.test(e.target.value)) {
        setEmail(e.target.value);
        document.querySelector(".form__email").style.color = "inherit";
      } else {
        document.querySelector(".form__email").style.color = "#F03A17";
      }
    }
    if (e.target.name === "messageEMail") {
      if (textExpression.test(e.target.value)) {
        setMessage(e.target.value);
        document.querySelector(".form__message").style.color = "inherit";
      } else {
        document.querySelector(".form__message").style.color = "#F03A17";
      }
    }
  };
  useEffect(() => {
    const data = [name, email, message];

    if (data.some((e) => e === "") === true) setEnable2Send(false);
    else setEnable2Send(true);
  }, [name, email, message]);
  return (
    <Form id="form">
      <label className="form__name" htmlFor="Name">
        {text.name}
      </label>
      <Input
        id="Name"
        name="nameEMail"
        placeholder={`🥰 ${text.your + " " + text.name}`}
        type="text"
        onChange={handleChange}
      />
      <label className="form__email" htmlFor="Email">
        {text.email}
      </label>
      <Input
        name="emailEMail"
        id="Email"
        placeholder={`📧 ${text.your + " " + text.email}`}
        type="text"
        onChange={handleChange}
      />
      <label className="form__message" htmlFor="Message">
        {text.message}
      </label>
      <Message
        name="messageEMail"
        placeholder={`✍🏼 ${text.your + " " + text.message}`}
        id="Message"
        onChange={handleChange}
      />
      <Submit
        unableSubmit={enable2Send}
        onClick={handleSubmit}
      >{`${text.send} 📤`}</Submit>
    </Form>
  );
}

export default ContactForm;
