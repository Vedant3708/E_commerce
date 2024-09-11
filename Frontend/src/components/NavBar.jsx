import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    setIsHovered(false);
  }, [user]);

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <Link
            to="/"
            className="flex items-center justify-center text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded"
          >
            <h1 className="text-white text-lg font-bold">LibertyLedger</h1>
          </Link>

          {/* <p className="flex items-center text-white text-lg mr-3 ml-3">
            Resources
          </p>
          <p className="flex items-center text-white text-lg mr-3 ml-3">
            Contact us
          </p> */}

          <Link
            to="/resources"
            className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded"
          >
            Resources
          </Link>
          <Link
            to="/contactUs"
            className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded"
          >
            Contact us
          </Link>
        </div>
        <div className="flex items-center relative">
          {user ? (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/user.ico"
                alt="User"
                className="w-12 h-12"
                style={{ filter: "invert(100%)" }}
              />
              {isHovered && (
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="absolute top-full right-0 mt-0 bg-indigo-700 text-white px-6 py-3 rounded shadow-lg text-lg w-auto min-w-[100px] text-center"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white px-4 py-2 hover:bg-indigo-700 rounded"
            >
              Your Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
