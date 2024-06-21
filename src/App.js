import React from 'react';
import Home from './Home';
import './App.css';
import Merge from './Merge';
import Navbar from './Navbar';
import Split from './Split';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Footer from './Footer';
import About from './about';

const App = () => {


  return (
    
    <Router>
    <div className='app-container'>
    <Navbar/><br/>
    
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/Merge" element={<Merge />} />
              <Route path="/Split" element={<Split />} />
              
    </Routes>
    <Footer/>
    
    </div>
    </Router>
  );
};

export default App;