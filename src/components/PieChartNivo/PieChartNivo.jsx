import { ResponsivePie } from "@nivo/pie";
import mili2time from "../../utils/mili2time";
import { ContainerPie } from "./style";

export default function PieChartNivo({ data }) {
  return (
    <ContainerPie>
      <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      arcLinkLabelsTextColor="white"
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
  </ContainerPie>
  )
}