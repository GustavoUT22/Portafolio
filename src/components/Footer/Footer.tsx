import styled from "styled-components";

const ContainerFooter = styled.footer`
  height: 10vh;
  background-color: gray;
  width: 100%;
`

const Footer = () => {
  return(
    <ContainerFooter>
      <h3>Footer</h3>
    </ContainerFooter>
  )
}

export default Footer