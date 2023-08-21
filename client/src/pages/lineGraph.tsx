import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useWorldwideData } from "../action/queryFetch";

const LineGraph: React.FC = () => {
  const { data } = useWorldwideData();
  if (!data) {
    return <div>Loading data...</div>;
  }

  const formattedData = Object.keys(data.cases).map((date) => ({
    date,
    value: data.cases[date],
  }));

  return (
    <div className="overflow-scroll  ml-4">
      <h2 className="text-2xl">Cases with Date </h2>
      <ResponsiveContainer width={1100} height={300}>
        <LineChart
          data={formattedData}
          margin={{ top: 30, right: 20, bottom: 5, left: 50 }}
        >
          <XAxis dataKey="date" angle={-45} textAnchor="end" />
          <YAxis domain={["0", "700000000"]} />
          <CartesianGrid stroke="#ccc" />
          <Line
            type="linear"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={1}
          />
          <Tooltip />
          <Legend wrapperStyle={{ top: 10, right: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
