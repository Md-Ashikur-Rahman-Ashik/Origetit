import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrustworthyNewsChart = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("This week");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const getPastWeek = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const pastSunday = new Date(
      currentDate.setDate(currentDate.getDate() - currentDay)
    );
    const pastMonday = new Date(pastSunday);
    pastMonday.setDate(pastSunday.getDate() - 6);
    return { start: pastMonday, end: pastSunday };
  };

  const getPastMonth = () => {
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 30);
    return { start: pastDate, end: currentDate };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ai.oigetit.com/AI71/Histogram?json=%7b%22StartDate%22:%222024-01-01%22,%22EndDate%22:%222024-10-01%22,%22Query%22:%22UAE%22%7d"
        );
        const result = await response.json();

        const { start, end } =
          activeTab === "This month"
            ? getPastMonth()
            : activeTab === "This week"
            ? getPastWeek()
            : { start: startDate, end: endDate };

        const filteredData = result.filter((item) => {
          const pubdate = new Date(item.pubdate);
          return pubdate >= start && pubdate <= end;
        });

        console.log("Filtered Data:", filteredData);

        const dateArray = [];
        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
          const dateString = d.toISOString().split("T")[0];
          const dayData = filteredData.find(
            (item) => item.pubdate === dateString
          );
          dateArray.push({
            pubdate: dateString,
            trusted: dayData ? dayData.trusted : 0,
          });
        }

        setApiData(dateArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, startDate, endDate]);

  const chartData = {
    labels: apiData.map((item) => item.pubdate),
    datasets: [
      {
        label: "Trustworthy News Score",
        data: apiData.map((item) => item.trusted),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Trust Score",
          font: {
            size: 14,
            weight: "bold",
          },
          align: "center",
          color: "#000",
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        beginAtZero: true,
      },
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="space-x-3">
        {["This week", "This month", "Choose date"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab
                ? "bg-[#0FA7E66E] font-bold"
                : "bg-gray-100 text-black font-semibold"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Choose date" && (
        <div className="mt-4">
          <label className="mr-2">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <label className="mx-2">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      )}

      {loading ? (
        <p>Loading data...</p>
      ) : apiData.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>No data available for the selected time range.</p>
      )}
    </div>
  );
};

export default TrustworthyNewsChart;
