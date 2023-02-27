import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from "./productComponent";
import { fetchProducts } from "../../store/actions/Home/productActions";
const ProductListing = () => {
    // eslint-disable-next-line
    const products = useSelector((state) => state);
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <h1 className="text-center mt-5 mb-0">Our Collections</h1>
            <ProductComponent />
        </div>
    );
}

export default ProductListing;