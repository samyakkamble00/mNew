import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import NoPage from "./pages/NoPage/NoPage";
import MyState from "./context/Data/myState";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
