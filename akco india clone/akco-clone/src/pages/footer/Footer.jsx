import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className='grid sm:grid-cols-4 gap-2 bg-gray-950 text-white pb-10 pt-5 mt-20'>

                <div>
                    <h1 className='text-2xl m-3 justify-self-center hover:underline'> Quick Links </h1>
                    <ul className='justify-self-center hover:shadow-2xl'>
                        <Link to="/">   <li className='hover:text-red-600'>Home</li> </Link>
                        <Link to="/about">   <li className='hover:text-red-600'>About us</li> </Link>
                        <Link to="/service">    <li className='hover:text-red-600'>Services</li> </Link>
                        <Link to="/management">  <li className='hover:text-red-600'>Management</li> </Link>
                        <Link to="/blogs"> <li className='hover:text-red-600'>Blogs</li> </Link>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl m-3 justify-self-center hover:underline'>Services </h1>
                    <ul className='justify-self-center'>
                        <li className='hover:text-red-600'> Setting Up Business in India</li>
                        <li className='hover:text-red-600'>Accounting & Bussiness in India</li>
                        <li className='hover:text-red-600'>Assurance & Risk Advisory</li>
                        <li className='hover:text-red-600'>Corporate Training</li>
                        <li className='hover:text-red-600'>Tax Advisory & Compliances</li>
                        <li className='hover:text-red-600'>Legal Services</li>
                        <li className='hover:text-red-600'>Corporate Finance</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl m-3 justify-self-center hover:underline'> Policies</h1>
                    <ul className='justify-self-center'>
                        <li className='hover:text-red-600'>Privacy Policy</li>
                        <li className='hover:text-red-600'> Terms of Use</li>
                        <li className='hover:text-red-600'> Disclaimer</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl m-3 justify-self-center hover:underline'> Get in Touch </h1>
                    <p className='font-bold justify-self-center underline'>Adlakha Kukreja group</p>
                    <ul className='justify-self-center'>
                        <a className='hover:text-red-600'
                            href='https://maps.app.goo.gl/LYqeJgLcog2sPwPY6'> Q-7, II Floor, Model Town-1 Delhi-110009</a>
                        <li className='hover:text-red-600'> +919999237399,+919899822054</li>
                        <li className='hover:text-red-600'>01147331212</li>
                        <a className='hover:text-red-600'
                            href='mailto:contact@akcoindia.com'>contact@akcoindia.com</a>
                    </ul>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 bg-gray-950 border border-white p-5'>
                <div>
                    <h1 className='text-white justify-self-center'> © 2024 Adlakha Kukreja Group. All Rights Reserved. </h1>
                </div>
                <div className=' flex justify-self-center'>
                    <a className=''
                        href='https://wa.me/919899822054' >
                        <img className='h-8 mr-1'
                            src="/images/navigation/logo/whatsapp.svg" alt="w" /> </a>

                    <a href='https://www.facebook.com/akcoindia' >
                        <img className='h-7 mr-1'
                            src="/images/navigation/logo/fb.svg" alt="w" /> </a>

                    <a href='https://x.com/AdlakhaCo' >
                    <img className='h-7 mr-1'
                        src="/images/navigation/logo/twitter.svg" alt="w" />  </a>

                         <a a href='https://www.youtube.com/channel/UCyOoSzLCaCMINFy0n2Ic4-g' >
                    <img className='h-7 mr-1'
                        src="/images/navigation/logo/yt.svg" alt="w" />  </a>

                         < a href='https://www.linkedin.com/company/akcoindia' >
                    <img className='h-7 mr-1'
                        src="/images/navigation/logo/ld.svg" alt="w" /> </a>
                </div>
            </div>
        </>
    )
}

export default Footer