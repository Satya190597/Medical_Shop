import React,{useEffect,useState} from 'react';
import Base from '../core/Base';
import {getAllProduct} from '../api-calls/product';

// + Importing widgets.
import ProductFilterWidget from './widgets/ProductFilterWidget';

const ProductList = () => {

    // Initialize with empty array.
    var [productList,setProductList] = useState([]);

    useEffect(() => {
        populateProductList();
    }, [])

    const populateProductList = () => {
        getAllProduct().then(response => {
            setProductList(response);
        }).catch(error => {
            console.log(error);
        })
    }

    const filterProduct = (name,companyName,uses) => {
        
    }   

    return (
        <Base>
            <h1>Product List</h1>
            <ProductFilterWidget title="Product Filters" />
            <div>
                <label>Filters.</label>
            </div>
            {
                productList.map(element => {
                    return <p>{element['PRODUCT_NAME']}</p>;
                })
            }
        </Base>
    );
}

export default ProductList;
