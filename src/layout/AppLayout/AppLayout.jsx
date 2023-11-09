import { Outlet } from "react-router-dom";
import { Container } from "./style";
import { Header } from "../../components";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}