import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    // -------  States   ----------
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [validUser, setValidUser] = useState(false);
    const [hasUser, setHasUser] = useState([]);


    let navigate = useNavigate();
 


    //----------- Login Function -----------
    const loginIn = (email, password) => {
        const body = {
            email: email,
            password: password
        };
        return axios.post('http://127.0.0.1:8000/api/login', body);
    }


    //----------- Check Is User Login with Valid Token -----------
    const isLoggedIn = () => {
        setIsLoading(true);

        const token = localStorage.getItem('token');

        if (token) {
            const body = {
            };

            axios.post('http://127.0.0.1:8000/api/validToken', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.data.message === 'valid') {
                        setValidUser(true);
                        setIsLoading(false);
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status === 401) {
                            setValidUser(false);
                            setIsLoading(false);
                            navigate('/');
                        }
                    }
                });
        }
        else {
            setValidUser(false);
            setIsLoading(false);
        }
    }


    //----------- Check User Login Info -----------
    const hasValidUser = () => {
        const token = localStorage.getItem('token');
        return axios.get('http://127.0.0.1:8000/api/user/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    }


    const logout = () => {
        const token = localStorage.getItem('token');
        let body = [];
        axios.post('http://127.0.0.1:8000/api/logout/', body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }            
        })
        .then(res => {           
            if(res.data.logout === 'true'){
                localStorage.clear();
                navigate('/');
            }
        })
       
    }

    //----------- Check User Login Info -----------
    const getUserRole = () => {
        const token = localStorage.getItem('token');
        return axios.get('http://127.0.0.1:8000/api/role/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    }


    return {
        user,
        setUser,
        loginIn,
        isLoggedIn,
        setIsLoading,
        isLoading,
        validUser,
        setValidUser,
        hasUser,
        setHasUser,
        hasValidUser,
        logout,
        getUserRole
    }
}

export default useAuth;