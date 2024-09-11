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
import Content from "./components/Content";
import Prisoners from "./components/Prisoners";
import LegalAidProviderDashboard from "./components/LegalAidProviderDashboard";
import NewBailApplication from "./components/NewBailApplication";
import Front from "./components/Front";
import Resources from "./components/resources";
import Contact from "./components/contactus";
import Cal from "./components/bailcal";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <div className="container mx-auto p-4 min-h-screen">
            <Routes>
              <Route
                path="/content"
                element={
                  <PrivateRoute userRole={1}>
                    <Content />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bailcal"
                element={
                  <PrivateRoute userRole={1}>
                    <Cal />
                  </PrivateRoute>
                }
              />
              <Route
                path="/LegalAid"
                element={
                  <PrivateRoute userRole={2}>
                    <LegalAidProviderDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/prisoners"
                element={
                  <PrivateRoute userRole={3}>
                    <Prisoners />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Front />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contactUs" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />{" "}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
