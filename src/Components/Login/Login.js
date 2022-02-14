import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginIn, hasValidUser, setUser } = useAuth();
    let navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const loginOnClick = async (e) => {
        e.preventDefault();
        loginIn(email, password)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                if (response.data.user.email) {
                    navigate('/dashboard/home');
                }
            });
    }


    useEffect(() => {
        hasValidUser()
            .then(res => {
                if (res.data.email) {
                    navigate('/dashboard/home');
                }
            });
    }, [])

    return (
        <div className="login-container">
            <div className='login-title'>
                <h1>Welcome to E-Commerce Admin Panel</h1>
                <h2>Powered by <span>Excel IT AI</span></h2>
            </div>

            <div className="login">
                <div className="form">
                    <form className="login-form">
                        <h2>Login</h2>
                        <input type="text" onBlur={(e) => handleEmailChange(e)} placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <input type="password" onBlur={(e) => handlePasswordChange(e)} placeholder="password" required />
                        <button onClick={(e) => loginOnClick(e)} >login</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;