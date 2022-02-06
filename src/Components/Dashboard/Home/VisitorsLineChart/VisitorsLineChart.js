import React, { useEffect, useState } from 'react';
import './VisitorsLineChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const VisitorsLineChart = () => {

    const [labelDates, setLabelDates] = useState([]);
    const [chartData, setChartData] = useState([]);


    useEffect(() => {
        let last30Dates = [];
        let testVisitors = [];
        const min = 5000;
        const max = 7000;
        for (var i = 0; i <= 30; i++) {
            const today = new Date();
            const priorDate = new Date(new Date().setDate(today.getDate() - i));
            const day = priorDate.getUTCDate();
            const month = priorDate.getUTCMonth() + 1;
            const todayDate = `${day}/${month}`;
            last30Dates.push(todayDate);
            testVisitors.push(Math.floor(Math.random()*(max - min) + min));
        }
        setLabelDates(last30Dates);
        setChartData(testVisitors);

        
    },[])


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {            
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Daily Visitors',
            }
        },
        elements: {
            line: {
                tension: 0.4
            },
            point: {
                radius: 4,
                borderWidth: 2
            }
        },
        scales: {
            y: {
              min: 3000,
              max: 8000,
              ticks: {
                // forces step size to be 50 units
                stepSize: 500
              }
            },
            
          }
    };

    const labels = labelDates;

    const data = {
        labels,
        datasets: [
            {
                label: 'Visited Users',
                data: chartData,
                borderColor: '#2E1A08',
                backgroundColor: '#ffffff',
            }            
        ],
    };

   

    return (
        <div>
            <Line className="daily-visitors-chart" options={options} data={data} />
        </div>
    );
};

export default VisitorsLineChart;