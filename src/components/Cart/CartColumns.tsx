import React from "react";
import { Container, Row, Col } from "reactstrap";

export const CarColumns = () => {
  return (
    <Container className="text-center d-none d-lg-block">
      <Row>
        <Col xs="10" lg="2" className="mx-auto">
          <p className="text-uppercase font-weight-bold">Product</p>{" "}
        </Col>
        <Col xs="10" lg="2" className="mx-auto ">
        <p className="text-uppercase font-weight-bold">Name of Product</p>{" "}
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
        <p className="text-uppercase font-weight-bold">Price</p>{" "}
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
        <p className="text-uppercase font-weight-bold">quantity</p>{" "}
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
        <p className="text-uppercase font-weight-bold">remove</p>{" "}
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
        <p className="text-uppercase font-weight-bold">total</p>{" "}
        </Col>
      </Row>
    </Container>
  );
};