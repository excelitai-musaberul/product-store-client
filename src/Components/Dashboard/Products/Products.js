import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import './Products.css';
import ProductIcon from '../../../Images/product-icon.png';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://127.0.0.1:8000/api/products/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => setProducts(res.data));
    }, []);

    return (
        <div className='products'>

            {/* //-------- Product Page Title ---------- */}
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex align-items-center'>
                    <img className='section-title-icon' src={ProductIcon} alt="" />
                    <h4 className='ms-2 mb-0'>Products</h4>
                </div>
                <Link className='btn button-primary-filled px-3' to={`../addproduct`}><i className="bi bi-plus-circle me-1"></i> Add Product</Link>
            </div>

            <div className='custom-table-cont'>
                {/* //-------- Product Table Filter ---------- */}
                <div className='table-filter'>
                    <div className='d-flex align-items-center'>
                        <span className='me-1'>Category</span>
                        <select className='category-select' name="category">
                            <option value="all">All</option>
                            <option value="cat2">Category 2</option>
                            <option value="cat3">Category 3</option>
                            <option value="cat4">Category 4</option>
                        </select>
                    </div>
                    <div>
                        <input className='search-input' type='text' placeholder="Search Products" ></input>
                    </div>
                </div>

                {/* -------- Product Table ---------- */}
                <table className='custom-table'>
                    <thead>
                        <tr>
                            <th className='no-wrap'>Id</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Sales</th>
                            <th>Preview</th>
                            <th className='action-heading'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(pd => <tr
                                key={pd.id}
                            >
                                <td className='no-wrap'>{pd.id}</td>
                                <td>{pd.name}</td>
                                <td>{pd.category}</td>
                                <td>{pd.category}</td>
                                <td>{pd.price}</td>
                                <td>{pd.stock}</td>
                                <td>{pd.price}</td>
                                <td>{pd.thumbnail}</td>
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

export default Products;