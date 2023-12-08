import "./App.css";
import Cart from "./components/Cart";
import FoodTabs from "./components/FoodTabs";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodTabs />} />
        <Route path="/myorders" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
