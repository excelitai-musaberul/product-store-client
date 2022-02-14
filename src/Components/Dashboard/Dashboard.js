import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Dashboard.css';
import Logo from '.././../Images/logo.png';
import useAuth from '../../Hooks/useAuth';
import { useEffect } from 'react';

const Dashboard = () => {

    const [role, setRole] = useState('');
    const [userMenuClass, setUserMenuClass] = useState('d-none');
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const [notificationClass, setNotificationClass] = useState('d-none');
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { logout, getUserRole } = useAuth();


    useEffect(() => {
        getUserRole()
            .then(res => {
                setRole(res.data.role);
            })
    }, [])


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


    const toogleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
        else {
            setIsMobileMenuOpen(true);
        }
    }

    return (
        <div className='dashboard'>
            <div className={"sidemenu " + (isMobileMenuOpen ? 'visible' : '')}>
                <ul>
                    <div className='d-flex align-items-center px-2'>
                        <button onClick={toogleMobileMenu} className='btn close-sidemenu-btn'><i className="fa-solid fa-arrow-left"></i></button>
                        <h3>E-com Admin</h3>
                    </div>
                    <li><Link to={`home`}><i className="bi bi-speedometer2"></i> Dashboard</Link> </li>
                    {
                        (role === 'admin') ?
                            (
                                <>
                                    <li><Link to={`products`}><i className="bi bi-list-task"></i> Products</Link> </li>
                                    <li><Link to={`categories`}><i className="bi bi-diagram-3"></i> Categories</Link> </li>
                                    <li><Link to={`categories`}><i className="bi bi-file-earmark-check"></i> Orders</Link> </li>
                                </>
                            ) :
                            (
                                <>
                                    <li><Link to={`addproduct`}><i className="bi bi-file-bar-graph"></i> Report</Link> </li>
                                    <li><Link to={`addproduct`}><i className="bi bi-person"></i> My Profile</Link> </li>
                                    <li><Link to={`addproduct`}><i className="bi bi-gear"></i> Settings</Link> </li>
                                </>
                            )
                    }

                </ul>

                <div className='sidemenu-credit'>
                    <img className='img-fluid' src={Logo} alt="" />
                    <h6>Developed by Excel IT AI</h6>
                </div>
            </div>
            <div className="main-content">
                <div className="top-nav">
                    <div className='d-flex align-items-center'>
                        <button onClick={toogleMobileMenu} className='btn sidemenu-btn'><i className="fa-solid fa-bars"></i></button>
                        <p>Welcome to Admin Dashboard</p>
                    </div>

                    <div>
                        <button className='btn px-1'><i className="bi bi-question-circle"></i></button>
                        <button onClick={() => toggleNotificationMenu()} className='btn px-1'><i className="bi bi-bell"></i></button>
                        <button onClick={() => toggleUserMenu()} className='btn'> <span className='profile-name'>Seyam Khan</span> <img height={30} height={30} className='ms-1' src="../assets/images/profile.png" alt="" /> </button>

                        {/* --------------- User Profile Menu ---------------------- */}
                        <div className={`float-user-options ${userMenuClass}`}>
                            <div className='d-flex justify-content-center'>
                                <img className='mb-3' height={60} height={60} src="../assets/images/profile.png" />
                            </div>
                            <h6 className='text-center'>Seyam Khan</h6>
                            <p className='text-center mb-3'>Full-Stack Web Developer</p>

                            <button className='btn d-block'><i className="bi bi-people me-1"></i> My Profile</button>
                            <button onClick={() => logout()} className='btn'><i className="bi bi-box-arrow-right me-1"></i> Log Out</button>


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