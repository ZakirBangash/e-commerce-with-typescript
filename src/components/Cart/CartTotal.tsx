import { useContext } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context'
import { Types } from "../../Types/reducer_types";

export const CartTotal = () => {
   const { state, dispatch } = useContext(GlobalContext);


    let subTotal = 0;
    let sub: number[] = state.products.map((item) => (subTotal += item.price * item.quantity!));

    let SubTotal = sub.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const tempTax = Number(SubTotal) * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const tTotal = (Number(SubTotal) + tax);
    let newTotal: number = Number(tTotal);


    return (
        <Container>
            <Row>
                <Col className='mt-2 ml-sm-5 ml-md-auto  text-capitalize  subTotal'>
                    {/* <Link to="/"> */}
                        <Button outline color="danger" onClick={() => 
                                dispatch({
                                    type: Types.Clear
                                })
                        } className="px-5  mb-3 text-uppercase">
                            Clear Cart
                        </Button>
                    {/* </Link> */}
                    <h5>
                        <span className="text-title"> Subtotal: </span>
                        <strong>$ {SubTotal}</strong>
                    </h5>

                    <h5>
                        <span className="text-title"> tax: </span>
                        <strong>$ {tax}</strong>
                    </h5>

                    <h5>
                        <span className="text-title"> total: </span>
                        <strong>${newTotal.toFixed(2)}</strong>
                    </h5>
                </Col>
            </Row>
        </Container>

    )
}