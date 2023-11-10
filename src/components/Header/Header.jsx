import { HeaderDiv, StyledLink, ContainerLinks } from "./style";

export default function Header() {
  return (
    <HeaderDiv>
      <ContainerLinks>
        <StyledLink to="/">Recharts</StyledLink>
        <StyledLink to="/nivo">Nivo</StyledLink>
      </ContainerLinks>
    </HeaderDiv>
  );
}