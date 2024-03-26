import React from "react";
import { useSearchParams } from "react-router-dom";

function ProductPage() {
  let [query, setQuery] = useSearchParams();
  console.log(query.get("q"));

  return (
    <div>
      <h1>Show All products!!!</h1>
    </div>
  );
}

export default ProductPage;
