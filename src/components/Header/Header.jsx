import { HeaderDiv, StyledLink, ContainerLinks } from "./style";

export default function Header() {
  return (
    <HeaderDiv>
      <ContainerLinks>
        <StyledLink to="/">Recharts</StyledLink>
        <StyledLink to="/react-vis">React-Vis</StyledLink>
      </ContainerLinks>
    </HeaderDiv>
  );
}