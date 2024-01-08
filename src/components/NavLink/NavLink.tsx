import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledListItem = styled.li`
  list-style-type: none;
`;

export const StyledAnchor = styled.a`
  color: ${colors.title[100]};
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 500;
  padding: 0.25rem 0.25rem;;
  transition: border-bottom 1s;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid aqua;
    border-radius: 2px;
  }
  
  &:active,
  &:focus {
    color: #1fc0c0;
  }
`;

interface INavLink {
  name: string;
  href: string;
}

interface NavLinkProps {
  item: INavLink;
}

const NavLink: React.FC<NavLinkProps> = ({ item }): React.ReactElement => {
  return (
    <StyledListItem>
      <StyledAnchor role="navigation" href={item.href}>
        {item.name}
      </StyledAnchor>
    </StyledListItem>
  );
};

export default NavLink;
