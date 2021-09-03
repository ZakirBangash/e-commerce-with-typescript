import React ,{useContext, useState } from 'react'
import { Title } from '../Title'
import { CarColumns } from './CartColumns'
import { CartList } from './CartList'
import { CartTotal } from './CartTotal'
 import { GlobalContext } from "../../context";
 import { EmptyCart } from './EmptyCart'

export const Cart = () => {
     const { state : {products} } = useContext(GlobalContext);
    
    if(products.length){
    return (
        <>
            <Title name="Your" title="Cart" />
             <CarColumns />
             <CartList /> 
             <CartTotal />            

        </>
    )}else {
        return (
         <EmptyCart />
        )
    }
}