import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../constants/productData";
import { Card, Container, Nav, Navbar } from "react-bootstrap";

function ProductDetailPage() {
  const { id } = useParams();
  console.log(productData[id].url);

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
          <Card.Img variant="top" src={productData[0].url} />
          <Card.Body>
            <Card.Title>{productData[0].title}</Card.Title>
            <Card.Text>{productData[0].text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductDetailPage;
