import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../constants/productData";
import { Card, Container, Nav, Navbar } from "react-bootstrap";

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/product">Product Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="item">
        <Card style={{ width: "90%" }}>
          <Card.Img variant="top" src={productData[id].url} />
          <Card.Body>
            <Card.Title>{productData[id].title}</Card.Title>
            <Card.Text>{productData[id].text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductDetailPage;
