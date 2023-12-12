import styled from "styled-components";

const ContainerProjects = styled.section`
  height: auto;
  background-color: #272727;
  width: 100%;
  color: #c6fff9;
  border: 1px solid #086467;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
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
