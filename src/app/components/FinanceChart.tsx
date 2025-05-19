"use client";
import Image from "next/image";

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

const data = [
  {
    month: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    month: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    month: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    month: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    month: "May",
    income: 1890,
    expense: 4800,
  },
  {
    month: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    month: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white h-full rounded-xl p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBF1"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
