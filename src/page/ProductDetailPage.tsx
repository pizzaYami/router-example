import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Show Product Detail {id}</h1>
    </div>
  );
}

export default ProductDetailPage;