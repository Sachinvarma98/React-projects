import React from 'react'

const Navigation = () => {
  return (
    <>
    <nav className='flex border border-sky-500 h-10 items-center'>
        <div className='mr-30'>
            <img className='h-6'
             src="vite.svg" alt="reactLogo" />
        </div>
        <ul className='flex ml-90 gap-10 items-center justify-center '>
            <li> Home</li>
            <li> About</li>
            <li> Contact</li>
            
        </ul>
    </nav>
    </>
  )
}

export default Navigation