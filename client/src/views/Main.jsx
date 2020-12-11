import React, { useEffect, useState } from 'react';
import ProductManager from '../components/ProductManager';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])

    const createProduct = prod => {
        axios.post('http://localhost:8000/api/product', prod)
            .then(res=>{
                setProduct([...product, res.data]);
            })
    }

    return (
        <div>
           <ProductManager onSubmitProp={createProduct} intailTitle="" intailPrice="" intailDescription="" />
           <hr/>
           {loaded && <ProductList products={product} />}
        </div>
    )
}

export default Main;