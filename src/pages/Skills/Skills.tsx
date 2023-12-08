import styled from "styled-components";

const ContainerSkills = styled.div`
  height: 30vh;
  background-color: aliceblue;
  width: 100%;
`;

const Skills = () => {
  return (
    <ContainerSkills>
      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>TypeScript</li>
        <li>Ruby On Rails</li>
        <li>NodeJS</li>
        <li>ReactJs</li>
        <li>PostgresQl</li>
      </ul>
    </ContainerSkills>
  );
};

export default Skills;
