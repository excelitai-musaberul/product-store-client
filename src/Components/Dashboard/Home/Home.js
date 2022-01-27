import React from 'react';
import './Home.css';
import MonthlySalesChart from './MonthlySalesChart/MonthlySalesChart';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <div className='my-3'>
                <h4>Excel IT E-Commerce Dashboard </h4>
            </div>
            <Summary></Summary>
            <div className="row">
                <div className="col-md-6">
                    <MonthlySalesChart></MonthlySalesChart>
                </div>
            </div>
        </div>
    );
};

export default Home;