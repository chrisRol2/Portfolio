import React, { useContext } from "react";
import styled from "styled-components";
import faceImg from "../Images/MarcaColor.png";
import LanguageContext from "../Context/LangContext";

const HomeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  width: 90%;
  display: flex;
  /* padding-top: 75px; */
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const DescriptionP = styled.p`
  margin-top: 2%;
  width: 80%;
  font-size: 1.2rem;
`;
const Img = styled.img`
  margin-bottom: 5%;
  /* margin-top: 5%; */
  width: 400px;
`;
const H1 = styled.h1`
  font-size: 2.8rem;
`;

function Home() {
  const { text } = useContext(LanguageContext);
  return (
    <HomeContainer id="home__container">
      <Img src={faceImg} alt="Imagen" />
      <H1>FrontEnd Development</H1>
      <DescriptionP className="text-center">{text.description}</DescriptionP>
    </HomeContainer>
  );
}

export default Home;
