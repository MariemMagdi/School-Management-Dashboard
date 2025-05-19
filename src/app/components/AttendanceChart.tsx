"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data for AttendanceChart
const mockAttendanceData = [
  { day: "Mon", present: 25, absent: 5 },
  { day: "Tue", present: 28, absent: 2 },
  { day: "Wed", present: 27, absent: 3 },
  { day: "Thu", present: 30, absent: 0 },
  { day: "Fri", present: 26, absent: 4 },
  { day: "Sat", present: 24, absent: 6 },
];

const AttendanceChart = ({
  data,
}: {
  data: { day: string; present: number; absent: number }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={500} height={300} data={mockAttendanceData} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tick={{ fill: "#d1d5db" }}
          tickLine={false}
        />
        <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
        />
        <Bar
          dataKey="present"
          fill="#FAE27C"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="absent"
          fill="#C3EBF1"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
