import React from 'react';
import CategorySharePieChart from './CategorySharePieChart/CategorySharePieChart';
import './Home.css';
import MonthlySalesChart from './MonthlySalesChart/MonthlySalesChart';
import Summary from './Summary/Summary';
import TopFiveProducts from './TopFiveProducts/TopFiveProducts';
import UserStatistics from './UserStatistics/UserStatistics';
import VisitorsLineChart from './VisitorsLineChart/VisitorsLineChart';

const Home = () => {
    return (
        <div className='dashboard-home container-fluid'>
            <div className='my-3'>
                <h4>Excel IT E-Commerce Dashboard </h4>
            </div>
            <Summary></Summary>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mt-4">
                <div className="chart-cont col p-3">
                    <div className='chart-cont-inner card h-100 p-4'>
                        <MonthlySalesChart></MonthlySalesChart>
                    </div>
                </div>
                <div className="chart-cont col p-3">
                    <div className='chart-cont-inner card h-100 p-4'>
                        <UserStatistics></UserStatistics>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 my-4">
                <div className="chart-cont col">
                    <div className='chart-cont-inner card h-100 p-4'>
                        <CategorySharePieChart></CategorySharePieChart>
                    </div>
                </div>
                <div className="chart-cont col">
                    <div className='chart-cont-inner card h-100 p-4 ai-based-suggestions'>
                        <h6 className='mb-3'>Suggestions to Grow Faster Based on AI</h6>
                        <ul>
                            <li>Meet your customers where they are on social media</li>
                            <li>If you’re not achieving the goals you set for yourself, dig into your analytics to figure out where people are dropping off.</li>
                            <li>Don’t make your customers have to work to buy from you.</li>
                            <li>If you aren’t iterating with every reorder of your product, you’ll never build a brand online.</li>
                            <li>You can either offer it on your entire product catalog or implement a free shipping threshold that sets a dollar amount as a requirement to access it.</li>
                            <li>Run strategic promotions on your website</li>
                        </ul>
                    </div>
                </div>
                <div className="chart-cont col">
                    <div className='chart-cont-inner card h-100 p-4'>
                        <h6 className='mb-3'>Top 5 Products! <i className="fas fa-crown"></i></h6>
                        <TopFiveProducts></TopFiveProducts>
                    </div>
                </div>
            </div>

            <div className="row">
                <VisitorsLineChart></VisitorsLineChart>
            </div>
        </div>
    );
};

export default Home;