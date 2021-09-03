import React,{useContext} from 'react'
import { Container, Row, Col } from "reactstrap";
import {GlobalContext} from "../../context";
import { CartItem } from './CartItems';

export const CartList = () => {
     const { state : {products} } = useContext(GlobalContext);

    return (
      <Container>
           {products.map(product => <CartItem product={product} />) }  
      </Container>
    );
}