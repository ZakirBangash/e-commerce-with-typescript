import { Container, Row } from 'reactstrap';
import { productInfo } from '../Types/product_types';
import { Product } from './Product';
import { Title } from './Title'

export const ProductList = (props: { products: productInfo[] }) => {
    let { products } = props;
    return (
        <div>
            <Title name="Our" title="Products" />
            <Container className="py-5">
                <Row xs="1" sm="2" md="3">
                    {products?.map(product => <Product product={product!} />)}
                </Row>
            </Container>
        </div>
    )
}