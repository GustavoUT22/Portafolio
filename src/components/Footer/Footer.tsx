import styled from "styled-components";

const ContainerFooter = styled.footer`
  height: 10vh;
  background-color: gray;
  width: 100%;
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