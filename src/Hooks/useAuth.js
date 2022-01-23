import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
    // -------  States   ----------
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [validUser, setValidUser] = useState(false);
    const [hasUser, setHasUser] = useState([]);


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
        const user = JSON.parse(localStorage.getItem('user'));    
        if (user?.email) {
            return true;
        }
        else {
            return false;
        }
    }



    return {
        user,
        setUser,
        loginIn,
        isLoggedIn,
        isLoading,
        validUser,
        setValidUser,
        hasUser,
        setHasUser,
        hasValidUser
    }
}

export default useAuth;