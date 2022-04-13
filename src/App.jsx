// import { useState } from 'react'
import Navbar from "./pages/Navbar";
import Home from "./Pages/Home";
import About from "./pages/About";
import Ordersummary from "./Components/Ordersummary";
import Cart from "./Components/Cart";
import NoPage from "./Components/NoPage";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
// import { Login } from "@mui/icons-material";
import Login from "./Pages/Login";
import Footer from "./pages/Footer";
import Registerform from "./Pages/Registerform";

function App() {
  return (
    <div className="App">
      {/* <h6>Hi Anuradha</h6> */}
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart-summary" element={<Cart />} />
        <Route path="/cart-summary/order-summary" element={<Ordersummary />} />
        <Route path="/products" element={<Products />}>
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registerform />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
