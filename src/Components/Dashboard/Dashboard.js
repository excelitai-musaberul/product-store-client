import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Dashboard.css';
import Logo from '.././../Images/logo.png';

const Dashboard = () => {
    const [customizeSiteSubMenuClass, setCustomizeSiteSubMenuClass] = useState('d-none');
    const [isCustomizeSiteSubMenuOpen, setIsCustomizeSiteSubMenuOpen] = useState(false);

    const [userMenuClass, setUserMenuClass] = useState('d-none');
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const [notificationClass, setNotificationClass] = useState('d-none');
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);


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

    const toggleUserMenu = () => {
        if (isUserMenuOpen) {
            setUserMenuClass('d-none');
            setIsUserMenuOpen(false);
        }
        else {
            setUserMenuClass('d-block');
            setIsUserMenuOpen(true);
        }
    }

    const toggleNotificationMenu = () => {
        if (isNotificationOpen) {
            setNotificationClass('d-none');
            setIsNotificationOpen(false);
        }
        else {
            setNotificationClass('d-block');
            setIsNotificationOpen(true);
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
                    <img className='img-fluid' src={Logo} alt="" />
                    <h6>Developed by Excel IT AI</h6>
                </div>
            </div>
            <div className="main-content">
                <div className="top-nav">
                    <p>Welcome to Admin Dashboard</p>
                    <div>
                        <button className='btn px-1'><i className="bi bi-question-circle"></i></button>
                        <button onClick={() => toggleNotificationMenu()} className='btn px-1'><i className="bi bi-bell"></i></button>
                        <button onClick={() => toggleUserMenu()} className='btn'>Seyam Khan <img height={30} height={30} className='ms-1' src="../assets/images/profile.png" alt="" /> </button>

                        {/* --------------- User Profile Menu ---------------------- */}
                        <div className={`float-user-options ${userMenuClass}`}>
                            <div className='d-flex justify-content-center'>
                                <img className='mb-3' height={60} height={60} src="../assets/images/profile.png" />
                            </div>
                            <h6 className='text-center'>Seyam Khan</h6>
                            <p className='text-center mb-3'>Full-Stack Web Developer</p>

                            <button className='btn d-block'><i className="bi bi-people me-1"></i> My Profile</button>
                            <button className='btn'><i className="bi bi-box-arrow-right me-1"></i> Log Out</button>


                        </div>


                        {/* //--------------- Notifications ---------------------- */}
                        <div className={`float-notifications ${notificationClass}`}>
                            <ul>
                                <li>Lorem ipsum dolor si</li>
                                <li>Lorem ipsum dolor si ipsum dolor</li>
                                <li>Lorem ipsum dolor si</li>
                                <li>Lorem ipsum </li>
                                <li>Lorem ipsum dolor si ipsum dolor</li>
                                <li>Lorem ipsum dolor si ipsum dolor</li>
                            </ul>
                        </div>
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