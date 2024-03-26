import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function AboutPage() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/about">About Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>About ME.</h1>
      <div>시간이 부족해..</div>
      <button onClick={goToHomepage}>Home Button</button>
    </>
  );
}

export default AboutPage;
