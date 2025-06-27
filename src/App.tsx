import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import SessionPage from './components/SessionPage';
import CertificateChecker from './components/CertificateChecker';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1656]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<ProgramDetails />} />
          <Route path="/session/:id" element={<SessionPage />} />

          {/* ✅ New Route for Email-based Certificate Download */}
          <Route path="/certificates" element={<CertificateChecker />} />

          {/* ✅ New Route for Host College Registration */}
       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
