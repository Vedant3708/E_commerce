import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className='flex'>
          <h1 className="flex items-center text-white text-lg font-bold mr-8">BAIL</h1>
          <Link to="/" className="text-white text-lg px-4 py-2 hover:bg-indigo-700 rounded">Home</Link>
          <p className='flex items-center text-white text-lg mr-3 ml-3'>Bail-Calculator</p>
          <p className='flex items-center text-white text-lg mr-3 ml-3'>Resources</p>
          <p className='flex items-center text-white text-lg mr-3 ml-3'>Contact us</p></div>
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
