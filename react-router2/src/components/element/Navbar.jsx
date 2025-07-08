import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='bg-white  flex'>
    <div>
       <img className='h-10 inline shadow-2xl  bg-gray-400 mr-30' 
       src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" alt="" />
      </div>
       <ul className='flex gap-20 m-auto underline '>
       <Link to='/'> <li className='font-bold'>Home</li> </Link>
       <Link to='/product'> <li className='font-bold'>Product</li> </Link>
       <Link to='/about'> <li className='font-bold'>About </li> </Link>
      <Link to='/contact'>   <li className='font-bold'>Contact</li> </Link>
       </ul>
       </div>
       <div className='m-5 w-auto text-center justify-center'>
       <button className='text-red-500 bg-lime-400 rounded-sm'>Get Started</button>
 </div>
 
   </>
  )
}

export default Navbar