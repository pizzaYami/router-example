import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import { productData } from "../constants/productData";

function ProductPage() {
  const navigate = useNavigate();

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
      <div className="itemWrap">
        {productData.map((item) => (
          <Card style={{ width: "30%" }}>
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
              >
                Go Detail
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
