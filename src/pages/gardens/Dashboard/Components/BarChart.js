import { Doughnut, Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);

Chart.register(...controllers);
export default function BarChart() {
  const optionsBar = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          color: (ctx) =>
            ctx.index === 0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        display: false,
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu trong tuần",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
  };
  const dataBar = {
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    datasets: [
      {
        borderRadius: 7,
        label: "Doanh thu theo ngày",
        data: [10, 2, 3, 4, 5, 6, 7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };
  return (
    <Bar plugins={[ChartDataLabels]} options={optionsBar} data={dataBar}></Bar>
  );
}
