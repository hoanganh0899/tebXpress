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

interface OrderStatsChartProps {
  startDate: Date | null;
  endDate: Date;
}

const OrderStatsChart: React.FC<OrderStatsChartProps> = ({
  startDate,
  endDate,
}) => {
  const generateLabels = () => {
    const labels: string[] = [];
    if (!startDate) return labels;

    const start = new Date(startDate);
    const end = new Date(endDate);
    let currentDate = new Date(start);

    while (currentDate <= end) {
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;

      const label = `${day}/${month}`;

      labels.push(label);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return labels;
  };

  const generateData = () => {
    if (!startDate) return [];

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const data = Array.from({ length: diffDays + 1 }, () => 0);
    return data;
  };

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: "Giao thành công",
        data: generateData(),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default OrderStatsChart;
