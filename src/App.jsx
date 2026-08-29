import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import ScrollToTop from './components/common/ScrollToTop';

import Home           from './pages/Home';
import Shop           from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import About          from './pages/About';
import Contact        from './pages/Contact';
import Cart           from './pages/Cart';
import NotFound       from './pages/NotFound';

export default function App() {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Navbar />

      <PageTransition>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/shop"          element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/about"         element={<About />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/cart"          element={<Cart />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </PageTransition>

      <Footer />
    </div>
  );
}
