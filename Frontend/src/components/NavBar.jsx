import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className='flex '>
        <h1 className="text-white text-lg font-bold mr-8">BAIL</h1>
        <Link to="/content" className="text-white text-lg mr-3 ml-3 hover:bg-indigo-700">Home</Link>
        <p className='text-white text-lg mr-3 ml-3'>Bail-Calculator</p>
        <p className='text-white text-lg mr-3 ml-3'>Resources</p>
        <p className='text-white text-lg mr-3 ml-3'>Contact us</p></div>
        <div >
          <Link to="/prisoners" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Prisoners</Link>
          <Link to="/login" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Login</Link>
          <Link to="/signup" className="text-white px-4 py-2 hover:bg-indigo-700 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
