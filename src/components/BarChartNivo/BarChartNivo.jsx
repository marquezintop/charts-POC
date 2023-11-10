import { ResponsiveBar } from "@nivo/bar"
import { ContainerBar } from "./style";
import mili2time from "../../utils/mili2time";

export default function BarChartNivo({ data }) {
  return (
    <ContainerBar>
      <ResponsiveBar
      data={data}
      valueFormat={value =>
        `${mili2time(value)}`
      }
      colors={{scheme: "paired"}}
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
                {e.data.label} : {mili2time(e.data.value)}
            </strong>
        </div>
      )}
      />
    </ContainerBar>
  )
}