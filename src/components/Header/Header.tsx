import styled from "styled-components";
import Navbar from "../NavBar/Navbar";

const ContainerHeader = styled.div`
  width: 100%;
  background-color: lemonchiffon;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <Navbar />
    </ContainerHeader>
  );
};

export default Header;
