import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
function HomePage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Yongju House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img
        src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg"
        alt="home"
      />
    </>
  );
}

export default HomePage;
