import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const token = localStorage.getItem('token');

        axios.post('http://127.0.0.1:8000/api/products/', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.id) {
                    console.log(res.data);
                    alert(`Added New Product ${res.data.id}`);
                    reset();
                }
            });
    }


    return (
        <div className='add-product'>
            <div className='my-3 add-product-title'>
                <Link to={"../products"} className='btn'><i className="bi bi-arrow-left-short"></i></Link>
                <h3 className='mb-0'>Add Product</h3>
            </div>

            <div className='add-product-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='label'>Product Name</p>
                    <input className="form-control mt-1" placeholder='Product Name' {...register("name", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.name && <span className='text-danger'>Product Name required</span>}

                    <p className='label'>Product Category</p>
                    <select className="form-control mt-1"  {...register("category")}>
                        <option value="">Please Select a Category......</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </select>                   
                    {errors.category && <span className='text-danger'>Product Category required</span>}


                    {/* <p className='label'>Product Sub-Category</p>
                    <select className="form-control mt-1"  {...register("subCategory")}>
                        <option value="0">Please Select a Sub-Category......</option>
                        <option value="1">Sub-Category 1</option>
                        <option value="2">Sub-Category 2</option>
                    </select>
                    {errors.subCategory && <span className='text-danger'>This field is required</span>} */}



                    <textarea rows={8} className="form-control mt-3" placeholder='Product Description' {...register("description", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.description && <span className='text-danger'>Description required</span>}


                    <input className="form-control mt-3" placeholder='Price' {...register("price", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.price && <span className='text-danger'>Price required</span>}


                    <input className="form-control mt-3" placeholder='Stock' {...register("stock", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.stock && <span className='text-danger'>Stock required</span>}


                    {/* ---------Hidden Field---------- */}
                    <input type="hidden" defaultValue={5} {...register("sub-category", { required: true })}></input>

                    <input type="hidden" defaultValue={'image.png'} {...register("thumbnail", { required: true })}></input>
                   

                    <div className='mt-5'>
                        <button className='btn button-primary-filled px-4' type="submit"><i className="bi bi-plus-circle"></i> Add New Product</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddProduct;