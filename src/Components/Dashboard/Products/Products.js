import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './Products.css';

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
            <h1>Products</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className=''>Id</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Preview</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(pd => <tr
                                key={pd.id}
                            >
                                <td>{pd.id}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.category}</td>
                                <td>{pd.price}</td>
                                <td>{pd.image}</td>
                                <td>
                                    <button className='btn btn-warning me-1'>Edit</button>
                                    <button className='btn btn-danger'>Del</button>
                                
                                </td>

                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Products;