import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Resources from "./components/resources";
import Contact from "./components/contactus";
import Front from "./components/front";
import { AuthProvider, useAuth } from "./context/AuthContext";

const AppRoutes = () => {
  const { user } = useAuth(); // Access the user from AuthContext

  return (
    <Routes>
      {/* Default route set to Admin Login */}
      <Route
        path="/"
        element={user ? <Navigate to="/front" /> : <LoginPage />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/front" element={<Front />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <div className="container mx-auto p-4 min-h-screen">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
