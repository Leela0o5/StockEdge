import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/signup/Signup";
import Pricing from "./landingPage/pricing/PricingPage";
import Product from "./landingPage/products/ProductPage";
import About from "./landingPage/about/AboutPage";
import Support from "./landingPage/support/SupportPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFound from "./landingPage/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
