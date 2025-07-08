
import { Link } from 'react-router-dom'
import Servicedrop from './Servicedrop'

const Navigation = () => {

  return (
    <>
      <div className='h-12 grid sm:grid-cols-12 items-center bg-red-600 mb-11 shadow-2xl'>
        <div className=' bg-red-600 text-white sm:col-span-10'>
          <a href="tel:+919999237399" className='ml-3 hover:text-black'> IND ☎  +91-9999237399</a>
          <a href="tel:+01147331212" className='ml-3 hover:text-black'> IND ☎  01147331212</a>
          <a href="mailto:contact@akcoindia.com" className='ml-3 hover:text-black'> Contact@akcoindia.com</a>
          <a href='tel:9899822054' className='ml-3 hover:text-black'> +919899822054 </a>
        </div>
        <div className=' bg-red-600 sm:col-span-2 col-span-2 justify-center items-center sm:flex : hidden'>
          <a className=''
            href='https://wa.me/919899822054' > <img
              className='h-7 mr-2'
              src="/images/navigation/logo/whatsapp.svg" alt="w" />  </a>

          <a href='https://www.facebook.com/akcoindia' >
            <img className='h-5 mr-2 '
              src="/images/navigation/logo/fb.svg" alt="w" /> </a>

          <a href='https://x.com/AdlakhaCo' >
            <img className='h-5 mr-2 '
              src="/images/navigation/logo/twitter.svg" alt="w" /> </a>

          <a a href='https://www.youtube.com/channel/UCyOoSzLCaCMINFy0n2Ic4-g' >
            <img className='h-5 mr-2 '
              src="/images/navigation/logo/yt.svg" alt="w" /> </a>

          < a href='https://www.linkedin.com/company/akcoindia' >
            <img className='h-5 '
              src="/images/navigation/logo/ld.svg" alt="w" /> </a>
        </div>
      </div>

      <div className='sm:h-20 h-15 md:h-27 lg:h-30 bg-amber-50 shadow-2xl sm:col-span-12 m-auto mt-10 mb-12 sm:grid : hidden'>

        <div className='sm:grid-cols-2 sm:block : hidden '>
          <Link to="/read">  <img className='sm:h-20 h-15 md:h-27 lg:h-30 hover:shadow-2xl rounded-2xl'
            src="/images/navigation/logo/adk.webp" alt="adk" /> </Link>
        </div>

        <div className=' sm:grid-cols-10 navbar items-center flex w-auto gap-8 justify-center font-bold lg:ml-25 md:ml-45 sm:ml-35 ml-50 place-items-center self-center md:self-center lg:self-center lg:w-full absolute'>
          <Link to="/"> <button className=' hover:text-red-600 hover:underline '> HOME </button>  </Link>
          <Link to="/about">  <button className=' hover:text-red-600 hover:underline'> ABOUT </button> </Link>
          <button className=' hover:text-red-600 hover:underline'> < Servicedrop />  </button>
          <Link to="/management"> <button className=' hover:text-red-600 hover:underline'> MANAGEMENT </button>  </Link>
          <Link to="/blogs"> <button className=' hover:text-red-600 hover:underline'> BLOGS </button>  </Link>
          <Link to="/utilities"> <button className=' hover:text-red-600 hover:underline'> UTILITIES </button>  </Link>
          <Link to="/contact"> <button className=' hover:text-red-600 hover:underline'> CONTACT </button>  </Link>
        </div>


      </div>



    </>
  )
}

export default Navigation