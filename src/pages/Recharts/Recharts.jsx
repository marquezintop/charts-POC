import { BarCharSimple, CustomPieChart, PieChartSimple } from "../../components";
import { Container } from "./style";


export default function Rechart() {

  const data = [
    { name: 'Tarefas/Operacional', value: 10000000 },
    { name: 'Reunião', value: 3000000 },
    { name: 'Equipe Paralela', value: 500000 },
  ];
  
  const colors = ["#DE3104", "#204999", "#A803BF"];

  return (
    <Container>
      <PieChartSimple data={data} colors={colors}></PieChartSimple>
      <CustomPieChart data={data} colors={colors}></CustomPieChart>
      <BarCharSimple data={data} colors={colors}></BarCharSimple>
    </Container>
  )
}