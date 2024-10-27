// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Layouts/Navbar/Navbar';
import Home from './Pages/Home/Home';
import RecipeBook from './Pages/RecipieList/RecipieList';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Layouts/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipebook" element={<RecipeBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
