import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Admin signup function
  const signup = async (userData) => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Something went wrong with the server.");
        throw new Error(
          errorData.error || "Something went wrong with the server."
        );
      }

      const data = await response.json();
      setUser({ username: data.user.username, role: data.user.role });
      return data;
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Admin login function
  const login = async (userData, navigate) => {
    try {
      // Sample hardcoded credentials for verification
      const sampleUsername = "admin";
      const samplePassword = "123";
  
      if (
        userData.username === sampleUsername &&
        userData.password === samplePassword
      ) {
        // Set the authenticated user if credentials match
        setUser({ username: sampleUsername, role: "admin" });
        alert("Login successful!");
        navigate("/front"); // Redirect to front page
      } else {
        throw new Error("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };
  
  

  const logout = async () => {
    try {
      await fetch("http://localhost:8000/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
