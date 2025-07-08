import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Servicedrop = () => {
    const [open, setOpen] = useState(false);

    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);
    const toggleDropdown = () => setOpen((prev) => !prev);

    const handleOptionClick = () => {

        setOpen(false);
    };

    return (
        <>
            <div
                className="relative inline-block text-left"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <button
                    onClick={toggleDropdown}
                    className=" text-black px-4 py-2 rounded"
                >
                    SERVICES
                </button>

                {open && (
                    <div className="absolute w-100 bg-gray-200 text-black rounded shadow-lg z-20">
                        <Link to="/service">  <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100" >
                            Setting Bussiness In India
                        </button>  </Link>

                        <Link to="/about"> <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100" >
                            Accounting & Business Support
                        </button> </Link>

                        <Link to="/management">  <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Assurance & Business Advisors
                        </button> </Link>

                        <Link to="/blogs"> <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Tax Advisory & Compliances
                        </button> </Link>

                        <Link to="/utilities" > <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Legal Services
                        </button> </Link>

                        <Link to="/contact"> <button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Corporate Training
                        </button> </Link>

                        <Link to="/contact"><button
                            onClick={() => handleOptionClick('')}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Corporate Finance
                        </button> </Link>

                    </div>
                )}
            </div>
        </>
    )
}

export default Servicedrop