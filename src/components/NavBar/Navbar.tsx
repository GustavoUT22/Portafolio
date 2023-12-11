import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`
const NavLinksWrapper = styled.div`
  display: none;
  gap: .25rem;
  align-items: center;

  @media only screen and (min-width: 700px) {
    display: flex;
  }
`;

const StyledListItem = styled.li`
 list-style-type: none;
 text-transform: uppercase;
`
const NavbarWrapper = styled.div`
  /* display: flex; */
`
const HamburgerIcon = styled.div`
  display: flex;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;


export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const toggleNavbar = () => {
  setIsOpen((prev) => !prev)
}

  return (
    <div>
        <NavbarWrapper>
        <NavLinksWrapper>
        <StyledUnorderedList>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Portafolio</StyledListItem>
          <StyledListItem>Blog</StyledListItem>
          <StyledListItem>Contact us</StyledListItem>
        </StyledUnorderedList>
        </NavLinksWrapper>
        <HamburgerIcon>
          <button onClick={toggleNavbar}>
           {isOpen ? 'X' : <GiHamburgerMenu/> }
          </button>
        </HamburgerIcon>
        </NavbarWrapper>
    </div>
  );
}
