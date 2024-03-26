import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
