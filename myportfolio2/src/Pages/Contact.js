import React from "react";
import ContactForm from "../Components/ContactForm";
import styled from "styled-components";
import { useContext } from "react";
import LangContext from "../Context/LangContext.js";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  align-items: center;
  height: 80vh;
  background: #e5e5e5;
  & p,
  & h2 {
    margin-top: 0.5rem;
    text-align: center;
  }
  & h2 {
    text-decoration: underline solid #147e92;
  }
`;

function Contact() {
  const { text } = useContext(LangContext);

  return (
    <div>
      <Svg color="#e5e5e5" />

      <ContactContainer>
        <div>
          <h2>{text.contact}</h2>
          <p>{text.talk}</p>
        </div>
        <ContactForm />
      </ContactContainer>
    </div>
  );
}

const Svg = ({ color }) => (
  <div style={{ height: "10vw", overflow: "hidden" }}>
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: "100%",
        width: "100%",
        boxShadow: "0px -5px 3px 1px rgba(0, 0, 0, 0.5)",
      }}
    >
      <path
        d="M0.00,49.98 C250.84,151.47 251.97,150.48 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{ stroke: "none", fill: color }}
      ></path>
    </svg>
  </div>
);

export default Contact;
