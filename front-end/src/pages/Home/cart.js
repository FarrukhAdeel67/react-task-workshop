import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { deleteFromCart } from "../../store/actions/Home/cartActions"
import React from 'react'
import Menu from '@mui/material/Menu';
import { useSelector, useDispatch } from 'react-redux';
const Cart = ({ anchorEl, setAnchorEl, open }) => {
    const dispatch = useDispatch();
    const getData = useSelector(state => state.cartReducer.carts)

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt = (id) => {
        dispatch(deleteFromCart(id))
    }
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {
                getData.length ?
                    <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                    <th>
                                        <p>
                                            <Link className='text-decoration-none' to='/'>
                                                <i className='close icon' onClick={handleClose}></i>
                                            </Link>
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getData.map((e) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>
                                                        <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                    </td>
                                                    <td>
                                                        <p>{e.title}</p>
                                                        <p>${e.price}</p>
                                                        <p>{e.category}</p>
                                                        <p>{e.description}</p>
                                                        <p style={{ color: 'red', fontSize: "20,", cursor: "Pointer" }} onClick={() => { dlt(e.id) }}>
                                                            <i className="trash icon"></i>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div> :
                    <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                        <i className='fas fa-close smallclose'
                            onClick={handleClose}
                            style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                        <p style={{ fontSize: 22 }}>Your cart is empty</p>
                    </div>
            }
        </Menu>
    );
}

export default Cart;