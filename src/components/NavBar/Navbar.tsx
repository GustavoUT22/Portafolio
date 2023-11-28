import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`
const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

const StyledListItem = styled.li`
 list-style-type: none;
 text-transform: uppercase;
`


export default function Navbar() {
  return (
    <div>
      <StyledNavbar>
          <h3>Gustavo Ugarte</h3>
        <StyledUnorderedList>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Portafolio</StyledListItem>
          <StyledListItem>Blog</StyledListItem>
          <StyledListItem>Contact us</StyledListItem>
        </StyledUnorderedList>
      </StyledNavbar>
    </div>
  );
}
