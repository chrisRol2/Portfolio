import React, { useContext } from "react";
import styled from "styled-components";
import Project from "../Components/Project";
import Title from "../Components/Title";
import LanguageContext from "../Context/LangContext";
const ProjectsContainer = styled.div`
  margin: auto;
  display: flex;
  width: 90%;
  min-height: 100vh;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;

function Projects() {
  const { text } = useContext(LanguageContext);
  const { pText } = useContext(LanguageContext);
  return (
    <ProjectsContainer>
      <Title> {text.projects}</Title>
      {pText.map((project) => (
        <Project key={project.name} pText={project} />
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
