import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "8/21",
    volume: 30,
    positive: 10,
    negative: 5,
    neutral: 15,
    sentiment: "Neutral",
  },
  {
    date: "8/28",
    volume: 90,
    positive: 45,
    negative: 20,
    neutral: 25,
    sentiment: "Positive",
  },
  {
    date: "9/5",
    volume: 50,
    positive: 16,
    negative: 19,
    neutral: 15,
    sentiment: "Negative",
  },
  {
    date: "9/12",
    volume: 75,
    positive: 22,
    negative: 31,
    neutral: 22,
    sentiment: "Positive",
  },
  {
    date: "9/19",
    volume: 95,
    positive: 40,
    negative: 23,
    neutral: 32,
    sentiment: "Positive",
  },
  {
    date: "9/19",
    volume: 95,
    positive: 40,
    negative: 23,
    neutral: 32,
    sentiment: "Positive",
  },
  {
    date: "9/19",
    volume: 95,
    positive: 40,
    negative: 23,
    neutral: 32,
    sentiment: "Positive",
  },
  {
    date: "9/19",
    volume: 95,
    positive: 40,
    negative: 23,
    neutral: 32,
    sentiment: "Positive",
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { date, volume, positive, negative, neutral, sentiment } =
      payload[0].payload;
    return (
      <div className="bg-white p-2 border border-gray-300 shadow-md">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Volume:</strong> {volume}
        </p>
        <p>
          <strong>Positive:</strong> {positive}
        </p>
        <p>
          <strong>Negative:</strong> {negative}
        </p>
        <p>
          <strong>Neutral:</strong> {neutral}
        </p>
        <p>
          <strong>Sentiment:</strong>{" "}
          <span
            className={
              sentiment === "Positive"
                ? "text-green-500"
                : sentiment === "Negative"
                ? "text-red-500"
                : "text-yellow-500"
            }
          >
            {sentiment}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const BarChartComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-center text-xl font-bold">Media Mentions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          barSize={40}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            label={{ value: "Weeks", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            label={{ value: "Volume", angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="volume" fill="#4A90E2" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
