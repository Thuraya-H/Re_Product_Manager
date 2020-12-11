import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import ProductManager from '../components/ProductManager';
import DeleteButton from '../components/DeleteButton';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = prod => {
        axios.put('http://localhost:8000/api/product/' + id, prod)
            .then(res => console.log(res));
    }
    return (
        <div>
        {loaded && (
            <>
            <ProductManager 
                onSubmitProp={updateProduct} 
                intailTitle={product.title} 
                intailPrice={product.price} 
                intailDescription={product.description} 
            />
            <DeleteButton productId={product._id} successCallback={()=> navigate("/product")}/>
        </>      
        )}
        </div>
    )
}

export default Update;