import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import './Products.css';
import ProductIcon from '../../../Images/product-icon.png';
import { type } from '@testing-library/user-event/dist/type';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [displayingProducts, setDisplayingProducts] = useState([]);
    const [pagesCount, setPagesCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [deletedId, setDeletedId] = useState('');


    // ----------------- Initial API Load --------------------
    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://127.0.0.1:8000/api/products/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const data = res.data;
                setProducts(data);
                setDisplayingProducts(data.slice(0, 20));
                const CalcPagesCount = Math.ceil(data.length / 20);
                setPagesCount(CalcPagesCount);
            });



        axios.get('http://127.0.0.1:8000/api/categories/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const data = res.data;
                setCategories(data);
            });

    }, []);



    // ----------------- Stock Render --------------------
    const renderStocktd = (stock) => {
        if (stock === 0) {
            return <td className='no-wrap-120 text-center text-danger fw-bolder'>{stock}</td>
        }
        else if (stock <= 5 && stock >= 0) {
            return <td className='no-wrap-120 text-center text-warning fw-bolder'>{stock}</td>
        }
        else {
            return <td className='no-wrap-120 text-center text-success'>{stock}</td>
        }
    }


    // ----------------- Change Current Page Number for Pagination --------------------
    const changeCurrentPage = number => {
        setCurrentPage(parseInt(number));
    }


    // ----------------- Change Displaying Products after Current Page Change --------------------
    useEffect(() => {
        const allProducts = products;
        const start = ((currentPage - 1) * 20);
        setDisplayingProducts(allProducts.slice(start, start + 20));
    }, [currentPage
    ])



    const deleteProduct = (id) => {
        const data = [];
        const token = localStorage.getItem('token');

        axios.post(`http://127.0.0.1:8000/api/products/delete/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,               
            }
        })
        .then(res => {
            console.log(res);
        });
       
    }

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
                            {
                                categories?.map(category => <option key={category.id} value={category.id}>{category.category}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <input className='search-input' type='text' placeholder="Search Products" ></input>
                    </div>
                </div>

                {/* -------- Product Table ---------- */}
                <table className='custom-table product-table'>
                    <thead>
                        <tr>
                            <th className='no-wrap'>Id</th>
                            <th className='no-wrap-120'>Preview</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Sub-Category</th>
                            <th className='no-wrap-100'>Price</th>
                            <th className='no-wrap-120 text-center'>Stock</th>
                            <th className='no-wrap-100'>Sales</th>
                            <th className='action-heading'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayingProducts.map(pd => <tr
                                key={pd.id}
                            >
                                <td className='no-wrap no-wrap-100'>{pd.id}</td>

                                {/* ----------- Thumbnail Image ------------- */}
                                <td className='no-wrap-120'>
                                    <img className='img-fluid' src={`http://127.0.0.1:8000/${pd.thumbnail}`} alt="" />
                                </td>

                                <td>
                                    <span className='me-1'>{pd.name}</span>
                                    {
                                        (pd.stock === 0) ?
                                            (
                                                <span className='out-of-stock'>Out of Stock</span>
                                            )
                                            :
                                            (
                                                <></>
                                            )
                                    }


                                </td>
                                <td>{pd.category}</td>
                                <td>{pd.category}</td>
                                <td className='no-wrap-100'>{pd.price}</td>

                                {
                                    renderStocktd(pd.stock)
                                }

                                <td className='no-wrap-100'>{pd.price}</td>


                                <td className='action'>
                                    <button className='btn text-muted'><i className="bi bi-eye-fill"></i></button>
                                    <button className='btn text-success'><i className="bi bi-pencil-square"></i></button>
                                    <button className='btn text-danger' onClick={() => deleteProduct(pd.id)}><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>


                {/* -------- Pagination ---------- */}
                <div className='pagination'>
                    <p className='me-3'>
                        Displaying {((currentPage - 1) * 20) + 1 + " "}
                        to {(currentPage === pagesCount) ? (products.length + " ") : ((currentPage * 20) + " ")}
                        of {products.length}</p>
                    <ul>
                        <li> <button className='btn'><i className="bi bi-chevron-left" disabled></i>Previous</button></li>
                        {
                            Array.from(Array(pagesCount), (e, i) => <li
                                key={i}
                            >
                                <button
                                    className={"btn " + (currentPage == i + 1 ? 'active' : '')}
                                    onClick={() => changeCurrentPage(i + 1)}
                                >{i + 1}</button>
                            </li>
                            )
                        }
                        <li> <button className='btn'>Next <i className="bi bi-chevron-right" disabled></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Products;