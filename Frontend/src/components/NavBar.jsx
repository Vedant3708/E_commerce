import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className='flex'>
          <h1 className="flex items-center text-white text-lg font-bold mr-8">BAIL</h1>
          <Link to="/" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Home</Link>
          <Link to="/Content" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Content</Link>
          <Link to="/bailcal" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Bail Calculator</Link>
          <Link to="/resources" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Resources</Link>
          <Link to="/contact" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Contact us</Link>
          </div>
        <div className='flex items-center'>
          <Link to="/prisoners" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Prisoners</Link>
          <Link to="/login" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Login</Link>
          <Link to="/signup" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
