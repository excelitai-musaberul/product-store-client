import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => { 
    return (
        <div className='dashboard'>
            <div className="sidemenu">
                <ul>
                    <li><Link to={`products`}>Products</Link> </li>
                    <li><Link to={`addproduct`}>Add Product</Link> </li>
                </ul>
            </div>
            <div className="main-content">
                <h5 className='pt-3'>Welcome to Admin Dashboard</h5>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;