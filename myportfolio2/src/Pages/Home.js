import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import "./Styles/Home.scss";
import faceImg from "../Images/MarcaColor.png";
import LanguageContext from "../Context/LangContext";

function Home() {
  const { text } = useContext(LanguageContext);
  const styles = {};
  styles.about__p = {
    marginTop: "2%",
    width: "80%",
    fontSize: "1.2rem",
  };
  styles.title = {
    // fontSize: "calc(1rem + 2.8vw)",
    fontSize: "2.8rem",
  };

  const DescriptionP = styled.p`
    margin-top: 2%;
    width: 80%;
    font-size: 1.2rem;
  `;

  return (
    <div id="home__container">
      <img src={faceImg} alt="Imagen" />
      <h1 style={styles.title}>FrontEnd Development</h1>
      <DescriptionP className="text-center">{text.description}</DescriptionP>
    </div>
  );
}

export default Home;
