import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CustomToolTip } from './style';
import mili2time from '../../utils/mili2time';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const time = mili2time(payload[0].value);

    return (
      <CustomToolTip>
        <p>{`${payload[0].name} : ${time}`}</p>
      </CustomToolTip>
    );
  }

  return null;
};

export default function PieChartSimple({ data, colors }) {

  return (
      <PieChart width={500} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}  strokeWidth={0}/>
            ))
          }
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
  );
}
