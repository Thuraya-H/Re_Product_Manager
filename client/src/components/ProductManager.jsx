import React, { useState } from 'react'
import axios from 'axios';
const ProductManager = props => {

    const {intailTitle, intailPrice, intailDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(intailTitle); 
    const [price, setPrice] = useState(intailPrice);
    const [description, setDescription] = useState(intailDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,description});
    }

    return (
        <div className="container w-25 p-3">
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Title</label>
                <input 
                    className="col form-control ml-3" 
                    type="text" name="title" value={title}
                    onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Price</label>
                <input 
                    className="col form-control ml-3" 
                    type="number" name="price" value={price}
                    onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Description</label>
                <input 
                    className="col form-control ml-3" 
                    type="text" name="description" value={description}
                    onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <input className="btn btn-light text-dark px-5" type="submit"/>
        </form>
        </div>
    )
}

export default ProductManager;