import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">MyApp</h1>
        <div>
          <Link to="/login" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Login</Link>
          <Link to="/signup" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
