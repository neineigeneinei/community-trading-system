import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Buy from '../pages/Buy';
import Cart from '../pages/Cart';
import Sell from '../pages/Sell';
import ProductDetail from '../pages/ProductDetail';
import Layout from '../components/Layout';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;