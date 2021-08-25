import React from "react";
import styled from "styled-components";

const MyProject = styled.a`
  padding: 0;
  height: 400px;
  aspect-ratio: 3/4;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
`;
const ImgProject = styled.div`
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
`;
const Aside = styled.aside`
  padding: 10px;
  height: 35%;

  width: 100%;
  flex-grow: 1;
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
        <img
          async
          src={img.default}
          alt="projectito"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center ",
          }}
        />
      </ImgProject>
      <Aside>
        <Title>{pText.name}</Title>
        <DescriptionP>{pText.description}</DescriptionP>
      </Aside>
    </MyProject>
  );
}

export default Project;
