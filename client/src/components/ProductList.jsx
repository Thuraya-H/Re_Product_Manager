import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList = props => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=> setProduct(res.data));
    },[])

    const removeFromDom = productId => {
        setProduct(product.filter(prod => prod._id !== productId));
    }
    return (
        <div className="container">
            <h2>All Products:</h2>
            {props.products.map((product, idx)=>{
                return <p>
                    <Link className="mx-2" to ={product._id} key={idx}>
                        {product.title} 
                    </Link>
                    |
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
            })}
        </div>
    )
}

export default ProductList;