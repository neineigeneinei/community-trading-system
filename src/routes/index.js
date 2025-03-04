import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Buy from '../pages/Buy';
import Cart from '../pages/Cart';
import Sell from '../pages/Sell';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;