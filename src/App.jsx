import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 260 },
  { month: "Apr", users: 310 },
  { month: "May", users: 420 },
];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Monthly Active Users</h2>

      <LineChart width={500} height={300} data={userGrowthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="users"
          stroke="#4f46e5"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}
