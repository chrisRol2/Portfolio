import React from "react";
import styled from "styled-components";
import { Detector } from "../Helpers/NavigatorDetector";
import "./Styles/menuButton.scss";
import Title from "./Title";
// 1174 x 657
const ProjectModalContainer = styled.div`
  width: 70%;
  min-height: 60%;
  max-height: 95%;
  aspect-ratio: 16/10;
  background-color: white;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  border-radius: var(--borderRadius);
  transition: width 1s, height 1s, transform 0.5s, color 0.5s,
    background-color 0.5s, box-shadow 0.5s;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  transform: scale(${(props) => (props.isOpen ? 1 : 0)});
  color: ${({ theme }) => theme.fontColor};
  position: relative;
  padding: 20px;
  background-color: ${({ theme }) => theme.bodyBg};
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
const ImgModal = styled.img`
  max-height: 60%;
  max-width: 95%;

  aspect-ratio: 16 / 9;
  align-self: center;
  object-fit: cover;
  object-position: top;
  border-radius: var(--borderRadius);
  position: relative;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
`;

const MyDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  transform: scale(${(props) => (props.isOpen ? 1 : 0)});

  /* transition: transform 0.5s; */
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1;
  background-color: ${!Detector("firefox")
    ? (props) => (props.isOpen ? "#bbbbbb60" : "#ffffff00")
    : "#ffffffda"};
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
  cursor: default;
  z-index: 2;
  & a {
    color: ${({ theme }) => theme.fontColor};
  }
`;
function ProjectModal({ isOpen, setModal, pText, Img }) {
  const close = () => {
    setModal(false);
  };

  return (
    <MyDiv isOpen={isOpen} onClick={(e) => close(e)}>
      <ProjectModalContainer
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
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
