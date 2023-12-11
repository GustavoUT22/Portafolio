import styled from "styled-components"

interface IStyledWrapper {
  displayType: "flex" | "none"| "grid" | "block"
  direction: "row" | "column"
  gap: "8px" | "16px" | "32px"
}


export const StyledWrapper = styled.div<IStyledWrapper>`
  display: ${(props) => props.displayType};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
`