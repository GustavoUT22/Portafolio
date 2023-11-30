import styled from "styled-components"

interface IStyledWrapper {
  displayType: "flex" | "none"| "grid" | "block"
  direction: "row" | "column"
  gap: "8px" | "16px" | "32px"
}

const gapStyles = (gap: string) => {
  switch (gap) {
    case "8px":
      return `gap: 8px;`;
    case "16px":
      return `gap: 16px;`;
    case "32px":
      return `gap: 32px;`;
    default:
      break;
  }
}
const typeStyles = (displaytype: string) => {
  switch (displaytype) {
    case "flex":      
      return `display: flex;`;
    case "none":
      return `display: none;`;
    case "grid":
      return `display: grid;`;
    case "block":
      return `display: block`;
    default:
      break;
  }
}

const directionStyles = (direction: string) => {
  switch (direction) {
    case "row":
      return `flex-direction: row;`;
    case "column":
      return `flex-direction: column`;
    default:
      break;
  }
}

export const StyledWrapper = styled.div<IStyledWrapper>`
  ${(props) => typeStyles(props.displayType)}
  ${(props) => directionStyles(props.direction)}
  ${(props) => gapStyles(props.gap)}
`