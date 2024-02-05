import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import ModalMenu from "../Modal/Modal";
import NavLink from "../NavLink/NavLink";

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const NavLinksWrapper = styled.div`
  display: none;
  gap: 0.25rem;
  align-items: center;

  @media only screen and (min-width: 700px) {
    display: flex;
  }
`;

const NavbarWrapper = styled.div`
  /* display: flex; */
`;
const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

const HambutgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  width: 35px;
  height: 35px;
  padding-top: 8px;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    {
      name: "Portafolio",
      href: "#portafolio",
    },
    {
      name: "About me",
      href: "/about-me",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "Contact me",
      href: "#contact-me",
    },
  ];
  const handleOpenModal = () => {
    console.log("a")
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <NavbarWrapper>
        <NavLinksWrapper>
          <StyledUnorderedList>
            {navbarItems.map((navItem) => (
              <NavLink key={navItem.name} item={navItem} />
            ))}
          </StyledUnorderedList>
        </NavLinksWrapper>
        <HamburgerIcon>
          <HambutgerButton onClick={handleOpenModal}>
            {isOpen ? " " : <AiOutlineMenu />}
          </HambutgerButton>
        </HamburgerIcon>
        {isOpen && <ModalMenu handleOpenModal={handleOpenModal} isOpen={isOpen} />}
      </NavbarWrapper>
    </div>
  );
}
