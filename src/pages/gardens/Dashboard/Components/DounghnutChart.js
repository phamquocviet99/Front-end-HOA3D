import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);

Chart.register(...controllers);
export default function DoughnutChart() {
    const optionsDounghnut = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Số đơn theo từng sản phẩm",
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
    
      const dataDoughnut = {
        labels: ["Lan vàng", "Lan trắng", "Lan đỏ", "Lan tím"],
        datasets: [
          {
            borderRadius: 4,
            label: "Số đơn hàng",
            data: [10, 2, 3, 1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
            ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            // ],
          },
        ],
      };
  return (
    <Doughnut options={optionsDounghnut} data={dataDoughnut} />
  );
}
