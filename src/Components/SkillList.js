import React from "react";
import img from "../Images/react.png";

import styled from "styled-components";
const Skills = styled.article`
  display: flex;
  min-height: 300px;
  width: 500px;
  /* aspect-ratio: 5/3; */
  color: ${({ theme }) => theme.bgWColor};
  flex-direction: row;
  margin: 2% 2.5%;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: #f6f6f6;
  border-radius: var(--borderRadius);
  /* transition: transform 0.5s; */
  @media (max-width: 853px) {
    flex-direction: column;
    max-height: 400px;
    width: 80%;
  }
  &:hover {
  }
`;
const Img = styled.img`
  /* border-radius: 20px; */
  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  width: 30%;
  object-fit: cover;
  object-position: -3.1rem center;
  transform: scale(1.01);
  @media (max-width: 853px) {
    /* top-left | top-right | bottom-right | bottom-left */
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    height: 40%;
    width: 100%;
    object-position: center;
  }
`;
const SkillList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;
const H2 = styled.h2`
  /* color: inherit; */
  margin: 5px 20px;
  font-weight: 900;
  font-family: "Lato", sans-serif !important;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function SkillCard({ value }) {
  return (
    <Skills>
      <Img src={img} />
      <SkillList>
        {value.map((skill) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "2rem",
              }}
              key={skill.name + 50}
            >
              <i
                className={`bx ${skill.icon}`}
                style={{ fontSize: "2rem" }}
                key={skill.name + 2}
              />
              <H2 key={skill.name}>{skill.name}</H2>
            </div>
          );
        })}
      </SkillList>
    </Skills>
  );
}

export default SkillCard;
