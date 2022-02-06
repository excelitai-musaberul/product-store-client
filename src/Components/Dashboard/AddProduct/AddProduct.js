import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {        
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


    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            var fileArray = [];
            fileArray.push(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            const oldFiles = files;
            const newArray = oldFiles.concat(fileArray[0]);
            setFiles(newArray);
        }
    });


    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files])


    return (
        <div className='add-product'>
            <div className='my-3 add-product-title'>
                <Link to={"../products"} className='btn'><i className="bi bi-arrow-left-short"></i></Link>
                <h3 className='mb-0'>Add Product</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='add-product-form'>
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
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p className='mb-0'>Click Here or Drag Photos to Upload</p>
                            <div className="upload-icon">
                                <i className="bi bi-plus-lg"></i>
                            </div>
                        </div>
                        <div style={thumbsContainer}>
                            {
                                files?.map(file => (
                                    <div className="thumbnail" style={thumb}
                                        key={file.name}>
                                        <span className="cancel-image">
                                            <button type='button' className="btn p-1"><i className="bi bi-x-circle"></i></button>
                                        </span>
                                        <div style={thumbInner}>
                                            <img
                                                src={file.preview}
                                                style={img}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <button className='btn button-primary-filled px-4' type="submit"><i className="bi bi-plus-circle"></i> Add New Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;