import styled from "styled-components";

const ContainerProjects = styled.section`
  height: 50vh;
  background-color: blueviolet;
  width: 100%;
`;

const Projects = () => {
  return (
    <ContainerProjects>
      <h2>Proyectos</h2>
      <div>
        <div>
          <span>Nombre del proyecto</span>
          <div>Imagen del proyecto</div>
          <a href="#">go repo</a>
          <a href="#">open project</a>
        </div>
        <div>
          <span>Nombre del proyecto</span>
          <div>Imagen del proyecto</div>
          <a href="#">go repo</a>
          <a href="#">open project</a>
        </div>
        <div>
          <span>Nombre del proyecto</span>
          <div>Imagen del proyecto</div>
          <a href="#">go repo</a>
          <a href="#">open project</a>
        </div>
        <div>
          <span>Nombre del proyecto</span>
          <div>Imagen del proyecto</div>
          <a href="#">go repo</a>
          <a href="#">open project</a>
        </div>
      </div>
    </ContainerProjects>
  );
};

export default Projects;
