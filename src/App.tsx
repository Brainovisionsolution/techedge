import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import SessionPage from './components/SessionPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1656]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<ProgramDetails />} />
          <Route path="/session/:id" element={<SessionPage />} />
          
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
