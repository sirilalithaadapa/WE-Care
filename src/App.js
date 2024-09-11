import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AwardsAndTestimonials from './components/AwardsAndTestimonials/AwardsAndTestimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <AwardsAndTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
