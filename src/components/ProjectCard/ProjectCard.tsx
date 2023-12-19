import FotoPerfil from './../../assets/images/foto-perfil-1.jpg'
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${FotoPerfil});
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

`;

const Content = styled.div`
  border: none;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 10px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  background-color: #003034;
  height: 110px;
`;

const TitleProject = styled.span`
  color: #4dfbf0;
  font-size: 24px;
  font-weight: 600;
`
const ProjectCard = () => { 
  return (
    <CardContainer>
      <Content>
        <TitleProject>Card Title</TitleProject>
        <div><p>Descripción de la card.</p></div>
        <div>
          <a>Code</a>
          <a>Demo</a>
        </div>
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
