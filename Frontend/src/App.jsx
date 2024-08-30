import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Content from './components/content';
import Prisoners from './components/Prisoners';
import LegalAidProviderDashboard from './components/LegalAidProviderDashboard';
import Front from './components/front';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />

        {/* <Content /> */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/prisoners" element={<Prisoners />} />
            <Route path="/" element={<Front />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/LegalAid" element={<LegalAidProviderDashboard userRole="Legal Aid Provider" />} />
            <Route path="/content" element={<Content/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
