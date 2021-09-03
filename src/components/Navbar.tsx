import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';

const NavBar = () => {


  return (
    <div>
      <Navbar className='nav' light expand="md">
        <NavbarBrand > <Link className='glow' to="/" >Store</Link></NavbarBrand>

          <Nav navbar>
            <Link className='link' to="/ProductHome" >Product</Link>
          </Nav>

          <Link className="cartIcon" to='/Cart'>
            <Button className='btn' color="primary"><i className="fa fa-shopping-cart align-middle">
            </i><span className='align-middle'> My Cart</span></Button>
          </Link>

      </Navbar>
    </div>
  );
}

export default NavBar;