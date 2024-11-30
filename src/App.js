import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductPage'; // Handle all products here
import ContactUs from './pages/ContactUs';
import PreBook from './pages/PreBook';
import CompareAll from './pages/CompareAll'; // Import the CompareAll component
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import the Privacy Policy page
import RefundPolicy from './pages/RefundPolicy'; // Import the Refund Policy page
import WebsitePolicy from './pages/WebsitePolicy'; // Import the Website Policy page
import Rentals from './pages/Rentals'; // Import the Rentals page

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/pre-book" element={<PreBook />} />
        <Route path="/compareall" element={<CompareAll />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/website-policy" element={<WebsitePolicy />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
