/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h1>Chai aur Full Stack</h1>
      <p> JOKES: {jokes.length} </p>
      {
        jokes.map((joke, index) => (
          <div>
            <h3> {joke.id} </h3>
            <h4> {joke.title} </h4>
            <h5>{joke.content} </h5>
          </div>
        ))
      }
    </>
  )
}

export default App
