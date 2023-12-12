import React from "react";
import styled from "styled-components";
import imageprofile from "../../assets/images/foto-perfil-1.jpg";

const SpaceBetween = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
`;
const FotoPerfil = styled.img`
  border-radius: 100px;
  width: 200px;
  height: auto;
  border: 2px solid #30f3e3;
  box-shadow: 0 0 20px rgba(0, 199, 196, 0.5);
  @media only screen and (max-width: 700px ) {
    width: 150px;
  }
`;

const ContainerPresentacion = styled.section`
  height: auto;
  background-color: #272727;
  width: 100%;
  color: #c6fff9;
  margin-top: 100px;
  border: 1px solid #086467;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 10px;
`

const PresentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  min-width: 300px;
  margin: 10px;
`

const ProfilePresentacion: React.FC = (): React.ReactElement => {
  return (
    <ContainerPresentacion>
      <SpaceBetween>
        <PhotoWrapper>
          <FotoPerfil src={imageprofile} />
        </PhotoWrapper>
        <PresentWrapper>
          <p>Hello, I'm</p>
          <h2>Gustavo Ugarte</h2>
          <h3>Software Developer</h3>
          <p>Full-stack developer .......</p>
        </PresentWrapper>
        </SpaceBetween>
    </ContainerPresentacion>
  );
};

export default ProfilePresentacion;
