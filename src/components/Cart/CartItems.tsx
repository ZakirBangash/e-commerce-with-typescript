import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import { productInfo } from "../../Types/product_types";
import { Types } from "../../Types/reducer_types";
import { Product } from "../Product";

export const CartItem = (props: { product: productInfo }) => {
   const {state,dispatch} = useContext(GlobalContext);

    let {product} = props;
    let {category,description,id,image,price,title,quantity} = product;
    let [count, setcount] = useState(1);

  let total = quantity! * price;


  return (
    <>  
      <Row className="text-center my-1">
        <Col xs="10" lg="2" className="mx-auto">
          <img src={image} className="img-fluid" /> 
        </Col>
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
         <span className="d-lg-none font-weight-bold mb-4">Product: </span>
          {title}
        </Col>
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
        <span className="d-lg-none font-weight-bold mb-4">Price: </span>
          {price}
        </Col>

        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <div className="btnQ">
            <Button
              outline
              disabled={quantity === 0 ? true : false}
              className="mx-1"
              onClick={() => { 
                dispatch({
                  type: Types.Remove,
                  payload: {product}
                })
              }}
            >
              -
            </Button>

            <Button outline >
             {/* {count > 1 ? count : ccount}  */}
             {quantity}
            </Button>
            <Button
              outline
              className="mx-1"
              onClick={() => {
                dispatch({
                  type: Types.Add,
                  payload: {product}
                })
              }}
            >
              +
            </Button>
            {/* i am placing addTotal() below this line instead of
               onClick increment b\c it was skipping first attempt */}
            {/* {addTotal()} */}
          </div>
        </Col>

        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <div className="cart-icon" onClick={() =>
            dispatch({
              type: Types.Delete,
              payload: {id}
            })
          }
             >
            <i className="fa fa-trash-o"></i>
          </div>
        </Col> 
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <span className="d-lg-none font-weight-bold">Total: </span>
           {total} 
        </Col>
      </Row>
    </>
  );
};