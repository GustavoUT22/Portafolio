import styled from "styled-components";

const ContainerAbout = styled.section`
  height: auto;
  background-color: #272727;
  width: 100%;
  color: #c6fff9;
  border: 1px solid #086467;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
`;

const About = () => {
  return (
    <ContainerAbout>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos
        culpa placeat quae. Pariatur quisquam facilis consectetur illum
        voluptas, aut quas consequuntur amet. Cumque molestias, saepe
        repudiandae accusantium quo unde.
      </p>
    </ContainerAbout>
  );
};

export default About;
