import React, { useEffect, useState } from 'react';
import './MonthlySalesChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const MonthlySalesChart = () => {
    const [lastSixMonths, setLastSixMonths] = useState([]);  

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Monthly Sales - Last 6 Months',
            },
        },
    };

    const labels = lastSixMonths;
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1010, 2601, 2256, 2500, 3005, 2495],
                backgroundColor: ["#f7de97", "#d6f28a", "#faaf8e", "#92f7a3", "#abfcff", "#b7a6f7"]
            }
        ]
    };

    useEffect(() => {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var today = new Date();
        var d;
        var month;
        var monthsArray = [];
        for (var i = 6; i > 0; i -= 1) {
            d = new Date(today.getFullYear(), today.getMonth() - i, 1);
            month = monthNames[d.getMonth()];
            monthsArray.push(month);
        }
        setLastSixMonths(monthsArray);
    }, []);

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default MonthlySalesChart;