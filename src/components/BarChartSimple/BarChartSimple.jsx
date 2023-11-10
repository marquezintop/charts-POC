import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import { CustomToolTip } from "./style";
import mili2time from "../../utils/mili2time";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const time = mili2time(payload[0].value);

    return (
      <CustomToolTip>
        <p>{`${payload[0].payload.name} : ${time}`}</p>
      </CustomToolTip>
    );
  }

  return null;
};

export default function BarChartSimple({ data, colors }) {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis hide={true} />
      <Tooltip content={CustomTooltip} />
      <Bar dataKey="value" fill="#8884d8">
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}  strokeWidth={0}/>
          ))
        }
      </Bar>
    </BarChart>
  );
}
