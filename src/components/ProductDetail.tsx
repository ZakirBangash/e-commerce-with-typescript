import {useContext,useEffect, useState} from 'react';
import { Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom'
// import {GlobalContext} from '../Context'
import { Col } from 'reactstrap';
import { getProducts } from '../services/store_api';
import { productInfo } from '../Types/product_types';


export const ProductDetail = () => {
    // const {storeProducts} = useContext(GlobalContext);
    const {slug} = useParams();
    
    console.log(slug)

    const [products, setproducts] = useState<productInfo[]>()
    
useEffect(() => {

    const fetchData = async () => {
    const Products = await getProducts();
      setproducts(Products);  
    }
  fetchData();
  
  }, [])


  let productNew : productInfo | undefined = products?.find(product => product.title == slug)

  
    // const {price, img ,company,info} = storeProducts[slug];
    // console.log(slug)
    
    return (
    
        <Container className="py-5">
        <Row xs="1" sm="1" md="2">
        <Col className="my-5 mx-auto">
            <img src={productNew?.image} className="img-fluid" alt={productNew?.title} />
        </Col>
        <Col className="my-5 mx-auto px-5">
            <h1>{slug}</h1>
        <h3>Category: {productNew?.category}</h3>
         <h2>Price: {productNew?.price}</h2>
         <h2>Some info about product</h2>
         {productNew?.description}

        </Col>

        </Row>
        </Container>
    )
}