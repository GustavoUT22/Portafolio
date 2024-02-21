import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import NavLink from "../NavLink/NavLink";

const slideInX = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

interface ModalProps {
  isOpen: boolean;
}

const Centered = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div<ModalProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    50deg,
    ${colors.gray[950]},
    ${colors.turquoise[950]},
    ${colors.gray[950]}
  );
  color: white;
  z-index: 10;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${({ isOpen }) => (isOpen ? slideInX : slideOutX)} 0.5s ease-in-out;
`;

const ButtonStyles = styled.button`
  display: flex;
  align-self: center;
  background-color: skyblue;
  color: white;
`;

interface ModalMenuProps {
  isOpen: boolean;
  handleOpenModal: () => void
}
const StyledWrapperList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80wh;
`;

const StyledListMobile = styled.div`
  list-style: none;
`;

const ModalMenu: React.FC<ModalMenuProps> = ({ handleOpenModal, isOpen }) => {
  const navbarItems = [
    {
      name: "Portafolio",
      href: "#portafolio",
    },
    {
      name: "Learn with us",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "About us",
      href: "/about-us",
    },
  ];

  return (
    <DarkBG>
      <Centered>
        <Modal isOpen={isOpen}>
          <div>
            <div>menu</div>
            <ButtonStyles onClick={handleOpenModal}>Close</ButtonStyles>
          </div>
          <StyledWrapperList>
            <StyledListMobile>
              {navbarItems.map((navItem) => (
                <NavLink key={navItem.name} item={navItem} />
              ))}
            </StyledListMobile>
          </StyledWrapperList>
        </Modal>
      </Centered>
    </DarkBG>
  );
};

export default ModalMenu;
