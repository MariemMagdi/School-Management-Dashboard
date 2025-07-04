"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "total",
      count: boys + girls,
      fill: "#FFFFFF",
    },
    {
      name: "Girls",
      count: boys,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: girls,
      fill: "#C3EBF1",
    },
  ];
  return (
    <div className="w-full h-[75%] relative">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar
            // label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image
        src="/maleFemale.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CountChart;
