import React from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>AboutPage</h1>
      <button onClick={goToHomepage}>go to homepage</button>
    </div>
  );
}

export default AboutPage;
