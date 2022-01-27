import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import CategoryIcon from '../../../Images/categories.png';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://127.0.0.1:8000/api/categories/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => setCategories(res.data));
    }, []);

    return (
        <div className='categories'>

            {/* //-------- Product Page Title ---------- */}
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex align-items-center'>
                    <img className='section-title-icon' src={CategoryIcon} alt="" />
                    <h4 className='ms-2 mb-0'>Categories</h4>
                </div>
                <Link className='btn button-primary-filled px-3' to={`../addproduct`}><i className="bi bi-plus-circle me-1"></i> Add Category</Link>
            </div>

            <div className='custom-table-cont'>               

                {/* -------- Categories Table ---------- */}
                <table className='custom-table'>
                    <thead>
                        <tr>
                            <th className='no-wrap'>Id</th>
                            <th>Category Name</th>
                            <th>Description</th>                           
                            <th>Thumbnail</th>
                            <th className='action-heading'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(ctg => <tr
                                key={ctg.id}
                            >
                                <td className='no-wrap'>{ctg.id}</td>
                                <td>{ctg.category}</td>
                                <td>{ctg.description}</td>
                                <td>{ctg.thumbnail}</td>                                
                                <td className='action'>
                                    <button className='btn text-muted'><i className="bi bi-eye-fill"></i></button>
                                    <button className='btn text-success'><i className="bi bi-pencil-square"></i></button>
                                    <button className='btn text-danger'><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>


                {/* -------- Pagination ---------- */}
                <div className='pagination'>
                    <p className='me-3'>Displaying 20 of 270</p>
                    <ul>
                        <li> <button className='btn'><i className="bi bi-chevron-left"></i>Previous</button></li>
                        <li><button className='btn'>1</button></li>
                        <li><button className='btn'>2</button></li>
                        <li><button className='btn'>3</button></li>
                        <li><button className='btn'>4</button></li>
                        <li><button className='btn'>5</button></li>
                        <li> <button className='btn'>Next <i className="bi bi-chevron-right"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;