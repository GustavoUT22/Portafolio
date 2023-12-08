import styled from "styled-components";

const ContainerAbout = styled.section`
  height: 30vh;
  background-color: aquamarine;
  width: 100%;
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
