import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrustworthyNewsChart = ({ data }) => {
    const chartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Trustworthy News Score',
                data: data,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
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
                    text: "Percentage %",  // This adds the "Percent %" label on the y-axis
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

export default TrustworthyNewsChart;
