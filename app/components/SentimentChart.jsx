import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SentimentChart = ({ data }) => {
    const chartData = {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [
            {
                label: 'Positive',
                data: data.positive,
                borderColor: '#34d399',
                backgroundColor: 'rgba(52, 211, 153, 0.2)',
            },
            {
                label: 'Neutral',
                data: data.neutral,
                borderColor: '#facc15',
                backgroundColor: 'rgba(250, 204, 21, 0.2)',
            },
            {
                label: 'Negative',
                data: data.negative,
                borderColor: '#f87171',
                backgroundColor: 'rgba(248, 113, 113, 0.2)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Volume",  // This adds the "Volume" label on the y-axis
                    font: {
                        size: 14, // Adjust the font size as per your needs
                        weight: "bold"
                    },
                    align: 'center', // Aligns the label in the center of the axis
                    color: '#000' // Color for the label text
                },
                beginAtZero: true,
            },
            x: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default SentimentChart;
