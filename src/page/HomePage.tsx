import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">Go to about Page</Link>
      <button onClick={goProductPage}></button>
    </div>
  );
}

export default HomePage;
