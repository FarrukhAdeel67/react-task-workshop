import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Cart from './cart';
const Header = () => {
    const getData = useSelector(state => state.cartReducer.carts)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div  >
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container >
                    <Link className='text-decoration-none' to='/' >
                        <Navbar.Brand className='me-4'>FRK Shop</Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="text-decoration-none text-light" to='/'>Home</Link></Nav.Link>
                        <Badge badgeContent={getData.length} color="primary"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <i className="shop icon text-light mt-1" style={{ fontSize: 16, cursor: "pointer" }}></i>
                        </Badge>
                    </Nav>
                </Container>
                <Cart anchorEl ={anchorEl} setAnchorEl={setAnchorEl} open={open} />
            </Navbar>
        </div>
    );
}

export default Header;