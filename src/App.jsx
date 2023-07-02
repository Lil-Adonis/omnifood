import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Error, Meals, AuthWrapper, Pricing, CtaPage } from "./pages";

const App = () => {
  return (
   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cta" element={<CtaPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  
  );
};

export default App;
