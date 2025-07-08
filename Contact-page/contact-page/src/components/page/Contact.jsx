import React from 'react'

const Contact = () => {
  return (
    <>
<div>
    <h1 className='text-4xl font-bold mt-12 mb-2 ml-12'> CONTACT US</h1>
    <p className='ml-12 font-medium'> LET'S CONNECT WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
</div>
<div>
    <img className='h-80 mt-2 ml-85'
    src="24logo.avif" alt="24logo" />
</div>
<div>
<div>
    <button className='border bg-black text-white p-0.5 ml-18 mt-12 shadow-2xl rounded-sm pl-2 pr-2'> VIA SUPPORT CHAT</button>
    <button className='border bg-black text-white p-0.5 ml-12 mt-12 shadow-2xl rounded-sm pl-2 pr-2'> VIA CALL</button>
</div>
<div>
     <button className='border pl-20 pr-20 mt-2 mb-4 ml-18 rounded-sm font-medium '> VIA EMAIL FORM </button>
</div>
<div className=''>
    <h1 className='text-sm  absolute mb-2 ml-22 font-medium bg-white border border-white'> NAME</h1>
    <input className='border ml-18 pr-26 mt-2.5 relative mb-4'
     type="text" name="name"  />
</div>
<div className=''>
    <h1 className='text-sm  absolute ml-22  font-medium bg-white'> E-MAIL</h1>
    <input className='border mb-4 ml-18 pr-26 mt-2.5 relative'
     type="text" name="email"  />
</div>
<div className=''>
    <h1 className='text-sm absolute ml-22 font-medium'> TEXT</h1>
    <input className='border  ml-18 pr-26 pb-10 relative mt-2.5'
     type="text" name="text" />
</div>
<div>
    <button className='bg-black text-white pr-10 pl-10 mt-4 ml-55 rounded-sm'> SUBMIT </button>
</div>
</div>


    </>
  )
}

export default Contact