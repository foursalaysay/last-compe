"use client"

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from "recharts"

export function Overview({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Legend />
        <Bar dataKey="ThisMonth" fill="primary" />
        <Bar dataKey="LastMonth" fill="primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
