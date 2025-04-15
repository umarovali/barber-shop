import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Product from './pages/Product/Product';
import Hairstyle from './pages/Hairstyle/Hairstyle';
import Servicee from './pages/Servicee/Servicee';
import Masters from './pages/Masters/Masters';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import BookAnModal from './components/BookAnModal/BookAnModal';
import Cart from './components/Cart/Cart';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/hairstyle" element={<Hairstyle />} />
        <Route path="/service" element={<Servicee />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
