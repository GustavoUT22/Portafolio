import { StyledWrapper } from "./wrapper.styles"

interface Props {
  displayType: "flex" | "none" | "grid" | "block"
  direction: "row" | "column"
  gap: "8px" | "16px" | "32px"
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({displayType, direction, gap, children}) => {
  return <StyledWrapper displaytType={displayType} direction={direction} gap={gap}>{children}</StyledWrapper>
}

export default Wrapper