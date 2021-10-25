import React, { useState } from "react";
import styled from "styled-components";
import { Detector } from "../Helpers/NavigatorDetector";
import ProjectModal from "../Components/ProjectModal";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.0001);
  transition: transform 0.8s;
`;

const MyProject = styled.section`
  color: ${({ theme }) => theme.bgWColor};

  position: relative;
  cursor: pointer;
  padding: 0;
  min-height: 400px;
  max-height: 400px;
  aspect-ratio: 3/4;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.cardShadow};
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBgColor};
  transition: transform 0.5s;
  border-radius: var(--borderRadius);
  @media (max-width: 375px) {
    width: 90%;
    height: 500px;
  }
`;
const ImgProject = styled.div`
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  /* border-radius: var(--borderRadius); */
  cursor: default;
  padding: 0;
  margin: 0;
  /* display: flex; */
  object-position: center;
  width: 100%;
  height: 65%;
  overflow: hidden;
  /* aspect-ratio: 1/1; */
  background-color: #fff;
  flex-grow: 1;
  &:hover ${Img} {
    transform: scale(1.1);
  }
`;

const Hover = styled.div`
  transform: scale(0);
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  background-color: ${!Detector("firefox") ? "#eeeeee80" : "#ffffffda"};
  backdrop-filter: blur(3px);

  border-radius: var(--borderRadius);
  transition: transform 0.5s, border-radius 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1, 0);

  & h2 {
    ${({ theme }) => theme.textShadow}
  }
`;

const Aside = styled.aside`
  padding: 10px;
  height: 35%;
  position: relative;
  width: 100%;
  flex-grow: 1;
  &:hover ${Hover} {
    transform: scale(1);
    border-radius: 0 0 var(--borderRadius) var(--borderRadius);
  }
`;
const Title = styled.h3`
  padding: 0.8em;
  font-size: 1rem;
  width: 100%;
  text-align: left;
  text-align: center;
`;
const DescriptionP = styled.p`
  padding-left: 0.8em;
  font-size: 0.9rem;
  overflow: hidden;
`;

function Project({ pText }) {
  const img = require(`../Images/Projects/${pText.img}`);
  const [state, setState] = useState(false);
  const handleClick = () => {
    document.body.style.overflow = !state ? "hidden" : "visible";
    document.body.style.paddingRight = !state ? "var(--scrollBarW)" : "";
    // document.body.style.position = !state ? "fixed" : "";
    setState(!state);
  };
  return (
    <MyProject>
      <ImgProject>
        <Img async src={img.default} alt={pText.alt} />
      </ImgProject>
      <Aside>
        <Hover onClick={handleClick}>
          <h2>More!</h2>
        </Hover>
        <Title>{pText.name}</Title>
        <DescriptionP>{pText.description}</DescriptionP>
      </Aside>
      <ProjectModal
        isOpen={state}
        setModal={handleClick}
        pText={pText}
        Img={img.default}
      />
    </MyProject>
  );
}

export default Project;
