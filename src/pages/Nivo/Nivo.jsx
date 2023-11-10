import { BarChartNivo, PieChartNivo } from "../../components";
import { Container } from "./style";

export default function Nivo() {


  const data = [
    {
      id: "Tarefas/Operacional",
      label: "Tarefas/Operacional",
      value: 10000000,
    },
    {
      id: "Reunião",
      label: "Reunião",
      value: 3000000,
    },
    {
      id: "Equipe Paralela",
      label: "Equipe Paralela",
      value: 500000,
    }
  ];

  return (
    <Container>
      <PieChartNivo data={data}></PieChartNivo>
      <BarChartNivo data={data}></BarChartNivo>
    </Container>
  )
}