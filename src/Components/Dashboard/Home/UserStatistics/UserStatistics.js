import React from 'react';
import './UserStatistics.css';
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



const UserStatistics = () => {

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
            position: 'top',
          },
          title: {
            display: true,
            text: 'User Statistics',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Registered Users',
            data: [10,5,15,30,15,48,78],
            borderColor: '#8fadff',
            backgroundColor: '#8fadff',
          },
          {
            label: 'Anonymous Users',
            data: [15,50,10,54,85,48,108],
            borderColor: '#ff8d87',
            backgroundColor: '#ff8d87',
          },
        ],
      };


    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
};

export default UserStatistics;