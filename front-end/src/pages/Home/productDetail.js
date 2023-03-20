import React, { useEffect } from "react";
import Header from "./header";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeSelectedProduct, fetchProduct } from "../../store/actions/Home/productActions";
import { addToCart } from "../../store/actions/Home/cartActions";

import Card from 'react-bootstrap/Card';
import "./style.css";
const ProductDetail = () => {
    const getData = useSelector(state => state.cartReducer.carts);
    console.log(getData);

    const { productId } = useParams();
    const product = useSelector(state => state.product)
    const user = useSelector(state=> state.logInUser.loggedInUser)

    const dispatch = useDispatch();
    const clickHandler = (e) => {
        dispatch(addToCart(e))
    }
    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        }
        // eslint-disable-next-line
    }, [productId])
    return (
        <div>
            <Header />
            <div className="wrapper" >
                {Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
                    <Card
                        style={{ width: '45rem', height: "28rem" }}
                        className="ms-auto me-auto  row row-cols-1 row-cols-md-2 g-4 "
                    >
                        <Card.Img variant="top" src={product.image} className="img-fluid mt-5  me-auto ms-auto" style={{ width: 200, height: 230 }} />
                        <Card.Body className="">
                            <Card.Title className=" holder text-4 me-0 ms-0" >{product.title}</Card.Title>
                            <Card.Text className="card-price">${product.price}</Card.Text>
                            <Card.Subtitle  >{product.category}</Card.Subtitle>
                            <Card.Text className="text-align text-sm">{product.description}</Card.Text>
                            <Link to='/'>
                                <button className="btn btn-danger" onClick={() => { clickHandler(product) }}>Add to Cart <i className="shop icon"></i></button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;