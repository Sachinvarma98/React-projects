import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [cities, setCity] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/cities')
      .then((response) => {
        setCity(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h1>Chai aur Fullstack</h1>
      <p>Cities: {cities.length} </p>

      {
        cities.map((city, index) => {
          <div>
            {city.id}
            {city.state}
            {city.country}
          </div>
        })
      }

    </>
  )
}

export default App
