import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import HomeSlider2 from './HomeSlider2';
import Footer from './footer/Footer';


const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [flipped, setFlipped] = useState(false);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    Response: true,

  };
  return (
    <>
      <div className="w-full m-auto mb-15 ">
        <div className="m-5 sm:h-100 h-50 md:h-120 lg:h-150">
          <Slider {...settings}>
            {data.map((d) => (
              <div className=" h-[400px] rounded-xl ">
                <div className="sm:h-100  md:h-120 lg:h-150 bg-gray-200 flex justify-center items-center ">
                  <img src={d.img} alt="" className="sm:h-100 h-50 md:h-120 lg:h-150" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <Link className='sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute sm:mb-145 mb-75 md:mb-157 lg:mb-185 font-serif hover:text-red-500 hover:underline'
                    to="/read">  <p className=""> {d.name}</p> </Link>
                  <  Link className='absolute sm:mb-112 mb-65 md:mb-122 lg:mb-132 sm:text-xl md:text-3xl lg:text-4xl hover:text-red-500 hover:underline'
                    to="/read">    <p className=''> {d.details} </p>  </Link>
                  <Link className=' absolute sm:mb-87 mb-45 md:mb-97 lg:mb-107'
                    to="/read">  <button className="bg-red-600 pl-12 pr-12 text-white py-2  px-10  hover:bg-red-800 ">  Read More </button> </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='bg-gray-100 grid sm:grid-cols-2 '>
        <div className=''>
          <h1 className='text-4xl mb-2 pt-8 pl-6 '> About Adlakha Kukreja Group</h1>
          <p className='mb-2 pt-6 pl-6'>Adlakha Kukreja Group (AKG) is a distinguished CA firm in Delhi, comprising chartered accountants, corporate financial advisors, and tax consultants, renowned for
            delivering an extensive array of professional and outsourcing services. These include audits, management consultancy, tax consultancy, accounting services, manpower management, and secretarial
            services. Our expertise extends to business setup services, company incorporation, GST consultancy, and tax return filing in India.</p>
          <p className='mb-2 pl-6'>As a proficient global service provider, we cater to clients across international borders, offering specialized skills that promote sound financial counsel and personalized,
            proactive services. Our primary objective is to become the preferred service partner in finance, taxation, auditing, and management assurance, consistently upholding the highest standards of excellence,
            integrity, and independence.</p>
          <p className='mb-2 pl-6'>Our dedicated team of professionals ensures your organization complies with essential corporate secretarial regulations. They regularly engage with industry experts and peers to
            keep our firm updated with current developments, enabling us to meet the unique needs of our clientele effectively.</p>
        </div>
        <div
          className="w-full h-full perspective cursor-pointer group"

        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform preserve-3d ${flipped ? "rotate-y-180" : ""
              } group-hover:rotate-y-180`}
          >
            {/* front Image  */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src="images/home/flip/flip-1.webp"
                alt="Front"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Back Image */}
            <div className="absolute inset-0 backface-hidden transform rotate-y-180">
              <img
                src="images/home/flip/flip-2.webp"
                alt="Back"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=' grid sm:grid-cols-3 gap-10 mt-10 sm:h-[300px] h-[300px] md:h-[300px] lg:h-[300px] m-5'>

        <div className='bg-red-500 hover:bg-red-600 rounded-2xl relative m-auto h-full'>
          <img className='h-15 rounded-full absolute place-self-center '
            src="images/home/hang/hangDroplet.webp" alt="hang" />
          <h1 className='text-white text-center mt-7'>OUR MISSION </h1>
          <p className='text-center text-white'>
            To emerge as a preferred service partner in the functions of Finance, Taxation, Auditing and Management Assurance with a constant strive to Excellence, Integrity and Independence.</p>
        </div>

        <div className='bg-orange-400 hover:bg-orange-600 rounded-2xl relative m-auto h-full' >
          <img className='h-15 rounded-full absolute place-self-center '
            src="images/home/hang/hangDroplet.webp" alt="hang" />
          <h1 className='text-white text-center mt-7'>OUR VISION</h1>
          <p className='text-center text-white'>AKGs vision is to be most recommended consultancy provider Lorem ipsum dolor sit amet consectetur. Itaque sit similique non, eum voluptate possimus vero consequatur porro, labore nihil .</p>
        </div>

        <div className='bg-green-400 relative rounded-2xl m-auto items-center h-full hover:bg-green-600' >
          <img className='h-15 rounded-full absolute place-self-center mb-7 mt-7'
            src="images/home/hang/hangDroplet.webp" alt="hang" />

          <h1 className='text-white text-center mt-7 '>WHY US</h1>
          <p className='text-center text-white'>Customised Solutions
            Process Driven Approach
            One-Stop Solutions
            Emphasis on Implementable Solutions
            Highly Qualified & Skilled professionals</p>
        </div>
      </div>

      <div className='sm:mt-15 mt-60 border-b-2 border-gray-300'>
        <h1 className=' text-red-600 text-center sm:text-6xl text-3xl font-bold'> Our Services </h1>
        <p className='text-center mb-3'>Our portfolio of services includes :</p>
      </div>

      <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <div className='h-55 m-1 bg-white rounded-4xl shadow-2xl hover:bg-fuchsia-300 border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Setting Up Bussiness in India</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5 hover:shadow-2xl'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white shadow-2xl rounded-4xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Accounting & Business Support</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white rounded-4xl shadow-2xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Assurance & Business Advisors</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white rounded-4xl shadow-2xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Tax Advisory & Compliances</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white rounded-4xl shadow-2xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Legal Services</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white rounded-4xl shadow-2xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Corporate Training</h1>
          <Link to="/details">   <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
        <div className='h-55 hover:bg-fuchsia-300 m-1 bg-white rounded-4xl shadow-2xl border-t-25 border-gray-500 transition-all duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl  p-8 '>
          <h1 className=' text-red-600 text-3xl pt-5 pl-5'>Corporate Finance</h1>
          <Link to="/details">  <button className='hover:bg-red-800 bg-red-600 text-white ml-5 p-2 pl-4 pr-4 rounded-xl mt-5'> View Details </button> </Link>
        </div>
      </div>
      <div className='mt-15'>
        <div>
          <h1 className='text-4xl font-bold text-center m-auto shadow-2xl'> GET A CALL BACK </h1>
          <p className=' text-center m-10'>We don't just care about numbers. We care about helping you tap into greatness on your entrepreneurial journey. Ready to build your dream
            business? Connect with us today!</p>
        </div>
        <div className='items-center justify-self-center '>
          <input className='h-10 w-50 rounded-xl bg-white sm:pl-5 sm:pr-5 sm:pt-0.5 sm:pb-0.5  md:pl-10 md:pr-10 lg:pl-15 lg:pr-15 m-10'
            type="text"  placeholder='Name' />
          <input className='h-10 w-50 rounded-xl bg-white sm:pl-5 sm:pr-5 sm:pt-0.5 sm:pb-0.5  md:pl-10 md:pr-10 lg:pl-15 lg:pr-15 m-10'
            type="text" placeholder='Email' />
          <input className='h-10 w-50 rounded-xl bg-white sm:pl-5 sm:pr-5 sm:pt-0.5 sm:pb-0.5  md:pl-10 md:pr-10 lg:pl-15 lg:pr-15 m-10'
            type="text"  placeholder='Phone No' />
          <a href='https://google.com' >  <button type='submit' className='h-10 w-50  bg-red-600 rounded-2xl  hover:bg-red-800 text-white sm:pl-5 sm:pr-5 sm:pt-0.5 sm:pb-0.5  md:pl-10 md:pr-10 lg:pl-15 lg:pr-15 m-10'>Submit</button> </a>
        </div>
      </div>
      <div>
        < HomeSlider2 />
      </div>

      <div>
        < Footer />
      </div>



    </>
  )
}

const data = [
  {
    name: `Welcome to Adlakha Kukreja Group`,
    img: `images/home/slider/home-1.webp`,
    details: `Your Work, Our Commitment`
  },
  {
    name: `Adlakha Kukreja Group`,
    img: `images/home/slider/home2.webp`,
    details: `Solution provider for Accounting & Taxation`,
  },
  {
    name: `Adlekha Kukreja Group`,
    img: `images/home/slider/home-3.webp`,
    details: `We help you grow`,
  }
]

export default Home