import { useContext } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { Card, CardFooter, CardBody } from "reactstrap";
import { productInfo } from "../Types/product_types";
import { GlobalContext } from "../context";
import { Types } from "../Types/reducer_types";

export const Product = (props: { product: productInfo }) => {

    const { state, dispatch } = useContext(GlobalContext);
    let { product } = props;

        let newProduct = {
            product,
            quantity:1
        }

    // function that will add product to cart
    const addToCart = () => {

        dispatch({
            type: Types.Create,
            payload: newProduct
        })
    }

    console.log(state)
    return (
        <Col className="my-5 mx-auto">
            <Card className="card">
                <CardBody className="py-5 img-container">
                    <Link to={product.title}>
                        <img src={product.image} className="img-fluid" alt={product.title} />
                    </Link>


                    {/* <button
            className="card-btn"
            disabled={inCart ? true : false}
            onClick={()=> {
                 toggle();
                  setstate(product);
                  addToCart(storeProducts[product]);
                 
            }}
          >
            {inCart ? (
              <p className=" mb-0">Added</p>
            ) : (
              <i className="fa fa-shopping-cart align-middle"></i>
            )}
            
          </button> */}

                    {/* i am placing addTotal() below this line instead of
               onClick addToCart b\c it was skipping first attempt */}


                    <button className="card-btn"
                        onClick={() => {
                            addToCart();
                        }}
                    >
                        <i className="fa fa-shopping-cart align-middle"></i>
                    </button>

                    {/* 
  {state === undefined ? '' : <ProductModal modal={modal} state={state} toggle={toggle} />} */}


                </CardBody>
                <CardFooter className="footer d-flex justify-content-between">
                    <p className="align-self-center font-bold mb-0">{product?.category}</p>
                    <h5 className="align-self-center mb-0">Rs {product?.price}</h5>
                </CardFooter>
            </Card>
        </Col>
    );
};