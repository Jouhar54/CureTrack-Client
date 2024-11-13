import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

const RevenueGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Hospital subscription ",
        data: [1.5, 3.8, 5.2, 7.9, 10.1, 12.3, 14.5, 5, 20, 9, 6],
        borderColor: "#00B4D8",
        backgroundColor: "#00B4D8",
        tension: 0.4,
      },
      {
        label: "Others subscription",
        data: [0.5, 1.2, 1.8, 3.2, 5.1, 6.7, 8.5, 10, 15, 6, 17],
        borderColor: "#FF2E63",
        backgroundColor: "#FF2E63",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Revenue graph",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `$${value}M`,
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Revenue graph</h2>
        <div className="text-gray-400">Total Revenue: 5,256,598</div>
      </div>
      <div className="h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueGraph;
