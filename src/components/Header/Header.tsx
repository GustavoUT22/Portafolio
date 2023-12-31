import styled from "styled-components";
import Navbar from "../NavBar/Navbar";

const ContainerHeader = styled.div`
  width: 100%;
  background-color: #272727;
  color: white;
  padding: 10px 0;
  position: fixed;
  box-shadow: 0 5px 10px rgba(0, 199, 196, 0.5);
  z-index: 10 ;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0px 16px;
`

const NameWrapper = styled.div`
display: flex;
align-items: center;
`

const NameStyles = styled.h2`
 color: #19e8e2;
 font-family: poppins;
 font-weight: 700;
 text-shadow: 3px 3px 6px rgba(25, 232, 226, 0.5);;
 `

const Header = () => {
  return (
    <ContainerHeader>
      <StyledNavbar>
      <NameWrapper>
        <NameStyles>Gustavo Ugarte</NameStyles>
      </NameWrapper>
      <Navbar />
      </StyledNavbar>
    </ContainerHeader>
  );
};

export default Header;
