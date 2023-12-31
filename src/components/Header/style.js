import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  background-color: #171717;
`;

export const StyledLink = styled(Link)`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: lightblue;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;