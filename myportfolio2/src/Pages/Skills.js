import Title from "../Components/Title";
import React, { useContext } from "react";
import LanguageContext from "../Context/LangContext";
import { tecno, tools } from "../API/works.json";
import SkillCard from "../Components/SkillList";
import styled from "styled-components";
const SkillContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-around;
  padding-bottom: 10rem;
`;

function Skills() {
  const { text } = useContext(LanguageContext);
  return (
    <div>
      <Title>{text.skills}</Title>
      <SkillContainer>
        <SkillCard type="Lenguages" value={tecno} />
        <SkillCard type="Tools" value={tools} />
      </SkillContainer>
    </div>
  );
}

export default Skills;
