import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
