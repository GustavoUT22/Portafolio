import styled from "styled-components";

const WrapperContactMe = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`

const StyledSpace = styled.div`
  height: 35vh;
  background-color: gray;
`
const StyledImg = styled.div`
  height: 35vh;
  background-color: blueviolet;
`
const ContainerBox = styled.div`
  height: 16vh;
  width: 80%;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ContactMe = () => {
  return(
    <WrapperContactMe>
      <StyledImg>Imagen</StyledImg>
      <ContainerBox>form y contact info</ContainerBox>
      <StyledSpace>espacio en blanco</StyledSpace>
    </WrapperContactMe>
  )
}


export default ContactMe