import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Order from './pages/Order';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" export element={<Home />} />
          <Route path="/order" export element={<Order />} />
          <Route path="/contact" export element={<Contact />} />
          
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
