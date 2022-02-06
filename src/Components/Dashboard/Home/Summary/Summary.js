import React, { useEffect, useState } from 'react';
import './Summary.css';
import SummaryCard from './SummaryCard/SummaryCard';

const Summary = () => {

    const [todayData, setTodayDate] = useState('');

    const summaryData = [
        {
            id: 1,
            title: "Total Orders",
            amount: "55,610",
            text: "Total orders received so far",
            backgroundColor: "#8862E0",
            icon: "bi bi-file-earmark-bar-graph"
        },
        {
            id: 2,
            title: "Total Sales",
            amount: "$12,789,000",
            text: "Total orders received so far",
            backgroundColor: "#35964e",
            icon: "bi bi-currency-dollar"
        },
        {
            id: 3,
            title: "Total Users",
            amount: "29,568",
            text: "Total orders received so far",
            backgroundColor: "#3c86c7",
            icon: "bi bi-people-fill"
        },
        {
            id: 4,
            title: "Daily Visitors",
            amount: "149,568",
            text: "Total visitors since your site publish",
            backgroundColor: "#FD8213",
            icon: "bi bi-eyeglasses"
        }
    ];

    function getCurrentDate(separator = '') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
    }


    useEffect(() => {
        setTodayDate(getCurrentDate('-'));
    }, [])

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h6>Your entire business at a glance! <i className="bi bi-bar-chart-line-fill text-success"></i></h6>
                <h6>Till {todayData}</h6>
            </div>


            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    summaryData.map(data => <SummaryCard
                        key={data.id}
                        summary={data}
                    ></SummaryCard>)
                }
            </div>

        </div>
    );
};

export default Summary;