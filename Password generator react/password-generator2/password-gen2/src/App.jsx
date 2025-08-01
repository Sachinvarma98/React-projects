/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAll, setNumAll] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = () => {
    useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numAll) str += "123456789"
      if (charAll) str += "~!@#$%^&*()_+:.,[]{}|"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char)
      }
      setPassword(pass)

    }, [length, numAll, charAll, setPassword])
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={Password}
            className='outline-none w-full py-1 px-3 bg-white text-black'
            placeholder='password'
            readOnly
          />
          <button>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
             onChange={() => {(length)}}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numAll}
              id='numInput'
              onChange={() => {
                setNumAll((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
      
        </div>
      </div>
    </>
  )
}

export default App