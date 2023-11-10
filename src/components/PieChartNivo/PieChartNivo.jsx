import { ResponsivePie } from "@nivo/pie";
import mili2time from "../../utils/mili2time";

const pieData = [
  {
    id: "Tarefas/Operacional",
    label: "Tarefas/Operacional",
    value: 10000000,
    color: "hsl(90, 70%, 50%)"
  },
  {
    id: "Reunião",
    label: "Reunião",
    value: 3000000,
    color: "hsl(56, 70%, 50%)"
  },
  {
    id: "Equipe Paralela",
    label: "Equipe Paralela",
    value: 500000,
    color: "hsl(103, 70%, 50%)"
  }
];

export default function PieChartNivo() {
  return (
    <ResponsivePie
    data={pieData}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    arcLinkLabel={false}
    enableArcLinkLabels={false}
    valueFormat={value =>
      `${mili2time(value)}`
  }
    tooltip={(e) => (
      <div
          style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
              background: 'white',
          }}
      >
          <br />
          <strong>
              {e.datum.data.label} : {mili2time(e.datum.data.value)}
          </strong>
      </div>
  )}
  />
  )
}