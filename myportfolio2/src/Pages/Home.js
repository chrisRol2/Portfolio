import React, { useContext } from "react";
import styled from "styled-components";
import faceImg from "../Images/MarcaColor.5dd0be0a.png";
import LanguageContext from "../Context/LangContext";

const HomeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  /* height: 100vh; */
  width: 90%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: space-around; */
  padding-top: 75px;

  @media (max-width: 853px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DescriptionP = styled.p`
  margin-top: 2%;
  width: 80%;
  font-size: 1.2rem;
  text-align: center;
  user-select: text;
  &::selection {
    background-color: #c962a0;
    border-radius: 20px;
    color: white;
    background: #121111;
    text-shadow: 0px 0px 5px #fc7bc8;
  }
`;
const Img = styled.img`
  /* margin-bottom: 5%; */
  /* margin-top: 5%; */
  width: 320px;
  height: auto;
  transition: width 0.5s;
  border-radius: 50%;
  @media (max-width: 853px) {
    width: 200px;
  }
`;
const H1 = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  word-wrap: keep-all;
  ${({ theme }) => theme.textShadow};
  text-shadow: "text-shadow: 0px 0px 5px #fc7bc8";
`;

function Home() {
  const { text } = useContext(LanguageContext);
  return (
    <HomeContainer id="home__container">
      <Img src={faceImg} alt="Imagen" />
      <TextContainer>
        <H1>FrontEnd Development</H1>
        <DescriptionP className="text-center">{text.description}</DescriptionP>
      </TextContainer>
    </HomeContainer>
  );
}

export default Home;
