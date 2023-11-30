import React from "react";
import styled from "styled-components";
import imageprofile from "../../assets/images/foto-perfil-1.jpg"

const SpaceBetween = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
`
const FotoPerfil = styled.img<React.HtmlHTMLAttributes<HTMLImageElement>>`
  border-radius: 100px;
  width: 200px;
  height: auto;
`


const ProfilePresentacion: React.FC = (): React.ReactElement=> {
  return (
    <SpaceBetween>
      <div>
        <FotoPerfil src={imageprofile}/>
      </div>
      <div>
        <p>Hello, I'm</p>
        <h2>Gustavo Ugarte</h2>
        <h3>Software Developer</h3>
      </div>
  
    </SpaceBetween>
  );
};

export default ProfilePresentacion;