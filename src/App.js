import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./page/AboutPage.tsx";
import HomePage from "./page/HomePage.tsx";
import ProductPage from "./page/ProductPage.tsx";
import ProductDetailPage from "./page/ProductDetailPage.tsx";

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
