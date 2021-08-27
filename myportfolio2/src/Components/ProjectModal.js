import React from "react";
import styled from "styled-components";
import { Detector } from "../Helpers/NavigatorDetector";
import "./Styles/menuButton.css";
import Title from "./Title";

const ProjectModalContainer = styled.div`
  width: 50%;
  min-height: 60%;
  aspect-ratio: 16/10;
  background-color: white;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: width 1s, height 1s;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  position: relative;
  padding: 20px;
  @media (max-width: 1008px) {
    width: 70%;
    height: 80%;
  }
  @media (max-width: 425px) {
    width: 90%;
    height: 80%;
  }
`;

const Exit = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  transition: color 0.5s;
  transform: scaleX(-1);
  &:hover {
    filter: brightness(0.9);
    /* opacity: 0.8; */
  }
`;
const TitleModal = styled(Title)`
  font-size: 2rem;
  margin: 0 0;
`;

function ProjectModal({ isOpen, setModal, pText, Img }) {
  const MyDiv = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    transform: scale(${isOpen ? 1 : 0});
    z-index: 1;
    background-color: ${!Detector("firefox") ? "#55555590" : "#ffffffda"};
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s;
    cursor: default;
  `;
  const close = () => {
    setModal(false);
  };
  const ImgModal = styled.img`
    height: 50%;
    aspect-ratio: 1 / 1;
    align-self: center;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
    position: relative;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  `;
  return (
    <MyDiv onClick={(e) => close(e)}>
      <ProjectModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleModal className="text-center">{pText.name}</TitleModal>
        <Exit onClick={close}>🏃🏼‍♂️</Exit>
        <p>{pText.descriptionModal}</p>
        <ImgModal src={Img} alt="" />
        <a href={pText.url} target="_blank" rel="noreferrer">
          👉🏼Visit here!
        </a>
      </ProjectModalContainer>
    </MyDiv>
  );
}

export default ProjectModal;
// ✖🏃🏼‍♂️🚶🏼‍♂️🚶🏼‍♀️🙅🏼‍♂️
