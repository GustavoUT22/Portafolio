import styled from "styled-components";

const ContainerSkills = styled.div`
  height: auto;
  background-color: #272727;
  width: 100%;
  color: #c6fff9;
  border: 1px solid #086467;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
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
