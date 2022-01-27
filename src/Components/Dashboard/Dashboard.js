import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Dashboard.css';
import Logo from '.././../Images/logo.png';

const Dashboard = () => {
    const [customizeSiteSubMenuClass, setCustomizeSiteSubMenuClass] = useState('d-none');
    const [isCustomizeSiteSubMenuOpen, setIsCustomizeSiteSubMenuOpen] = useState(false);

    const customizeSiteSubMenuToggle = () => {
        if (isCustomizeSiteSubMenuOpen) {
            setCustomizeSiteSubMenuClass('d-none');
            setIsCustomizeSiteSubMenuOpen(false);
        }
        else {
            setCustomizeSiteSubMenuClass('d-block');
            setIsCustomizeSiteSubMenuOpen(true);
        }
    }

    return (
        <div className='dashboard'>
            <div className="sidemenu">
                <ul>
                    <h3>E-com Admin</h3>
                    <li><Link to={`home`}><i className="bi bi-speedometer2"></i> Dashboard</Link> </li>
                    <li><Link to={`products`}><i className="bi bi-list-task"></i> Products</Link> </li>
                    <li><Link to={`categories`}><i className="bi bi-diagram-3"></i> Categories</Link> </li>
                    <li><Link to={`categories`}><i className="bi bi-file-earmark-check"></i> Orders</Link> </li>
                    <li><a href='javascript:void(0)' onClick={() => customizeSiteSubMenuToggle()} ><i className="bi bi-brush"></i> Customize Site</a> </li>
                    <ul className={`sub-sidemenu ${customizeSiteSubMenuClass}`}>
                        <li><Link to={`products`}>Top Banner</Link></li>
                        <li><Link to={`products`}>Promotion</Link></li>
                        <li><Link to={`products`}>On-going Sale</Link></li>
                    </ul>
                    <li><Link to={`addproduct`}><i className="bi bi-file-bar-graph"></i> Report</Link> </li>
                    <li><Link to={`addproduct`}><i className="bi bi-person"></i> My Profile</Link> </li>
                    <li><Link to={`addproduct`}><i className="bi bi-gear"></i> Settings</Link> </li>
                </ul>

                <div className='sidemenu-credit'>
                    <img className='img-fluid' src={Logo} alt=""/>
                    <h6>Developed by Excel IT AI</h6>
                </div>
            </div>
            <div className="main-content">
                <div className="top-nav">
                    <p>Welcome to Admin Dashboard</p>
                    <div>
                        <button className='btn'><i className="bi bi-question-circle"></i> Help</button>
                        <button className='btn'><i className="bi bi-box-arrow-right"></i> Log Out</button>
                    </div>

                </div>
                <div className="main-content-inner">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;