import styled from "styled-components";

const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #272727;
  color: white;
  padding: 10px 0;
  box-shadow: 0 -5px 10px rgba(0, 199, 196, 0.5);
`
const FooterWrapper = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`

const Footer = () => {
  return(
    <ContainerFooter>
      <FooterWrapper>
        <h3>Footer</h3>
      </FooterWrapper>
    </ContainerFooter>
  )
}

export default Footer