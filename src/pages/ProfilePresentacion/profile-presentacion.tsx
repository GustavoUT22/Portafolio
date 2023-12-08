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
`;

const ContainerPresentacion = styled.section`
  height: 30vh;
  background-color: beige;
  width: 100%;
`;

const ProfilePresentacion: React.FC = (): React.ReactElement => {
  return (
    <ContainerPresentacion>
      <SpaceBetween>
        <div>
          <FotoPerfil src={imageprofile} />
        </div>
        <div>
          <p>Hello, I'm</p>
          <h2>Gustavo Ugarte</h2>
          <h3>Software Developer</h3>
        </div>
      </SpaceBetween>
    </ContainerPresentacion>
  );
};

export default ProfilePresentacion;
