import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import Certificate from './components/certificates';
import CertificateChecker from './components/CertificateChecker';
import SDGCertificateChecker from './components/certificates1';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1656]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<ProgramDetails />} />
         
          {/* ✅ New Route for Email-based Certificate Download */}
          <Route path="/certificates" element={<CertificateChecker />} />
          <Route path="/career-dev/certificates" element={<Certificate/>}/>
          {/* ✅ New Route for Host College Registration */}
         <Route path="/dev/certificates" element={<SDGCertificateChecker/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
