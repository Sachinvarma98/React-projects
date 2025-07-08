import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Toggle = () => {
     const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className='sm:hidden : block'>
         <div className="relative">

        <button
          onClick={toggleNav}
          className="fixed top-13.25 right-4 z-50 text-white bg-gray-800 pl-4 pt-1 pb-1 pr-4 rounded-md"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-10 text-white transition-transform duration-1000 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <nav className="flex flex-col justify-center items-center h-full space-y-6 text-2xl">
            <Link to="/"> <button className="hover:text-red-500" onClick={toggleNav}>Home</button> </Link>
            <Link to="/about"> <a href="#" className="hover:text-red-500" onClick={toggleNav}>About</a> </Link>
            <Link to="/service"> <a href="#" className="hover:text-red-500" onClick={toggleNav}>Service</a> </Link>
            <Link to="/management"> <a href="#" className="hover:text-red-500" onClick={toggleNav}>Management</a> </Link>
            <Link to="blogs"> <a href="#" className="hover:text-red-500" onClick={toggleNav}>Blogs</a> </Link>
            <Link to="/utilities"> <a href="#" className="hover:text-red-500" onClick={toggleNav}>Utilities</a> </Link>
           <Link to="/contact">  <a href="#" className="hover:text-red-500" onClick={toggleNav}>Contact</a> </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Toggle