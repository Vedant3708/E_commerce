import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="container min-h-screen mx-auto p-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
