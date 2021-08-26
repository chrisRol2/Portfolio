import React from "react";
import styled from "styled-components";
import { Detector } from "../Helpers/NavigatorDetector";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.8s;
`;

const MyProject = styled.a`
  padding: 0;
  min-height: 400px;
  max-height: 400px;
  aspect-ratio: 3/4;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  transition: transform 0.5s;
  border-radius: 20px;
  @media (max-width: 375px) {
    width: 90%;
    height: 500px;
  }
`;
const ImgProject = styled.div`
  border-radius: 20px 20px 0 0;
  border-radius: 20px;
  cursor: default;
  padding: 0;
  margin: 0;
  /* display: flex; */
  object-position: center;
  width: 100%;
  height: 65%;
  overflow: hidden;
  /* aspect-ratio: 1/1; */
  background-color: #0a0a0c;
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

  background-color: ${!Detector("firefox") ? "transparent" : "#ffffffda"};
  background-color: ${!Detector("firefox") ? "#eeeeee80" : "#ffffffda"};
  backdrop-filter: blur(3px);

  border-radius: 50%;
  transition: transform 0.5s, border-radius 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1, 0);
`;

const Aside = styled.aside`
  padding: 10px;
  height: 35%;
  position: relative;
  width: 100%;
  flex-grow: 1;
  &:hover ${Hover} {
    transform: scale(1);
    border-radius: 0 0 20px 20px;
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
  return (
    <MyProject href={pText.url} target="_blank">
      <ImgProject>
        <Img async src={img.default} alt={pText.alt} />
      </ImgProject>
      <Aside>
        <Hover>
          <h2>Visit!</h2>
        </Hover>
        <Title>{pText.name}</Title>
        <DescriptionP>{pText.description}</DescriptionP>
      </Aside>
    </MyProject>
  );
}

export default Project;
