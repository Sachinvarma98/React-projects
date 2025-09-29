import { useEffect, useState } from 'react'
import './App.css'
import { getPost, getRandomUser } from './api'
import PostCard from './components/PostCard'
import UserCard from './components/UserCard'

function App() {

  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    getPost().then((post) => {
      setData(post)
    })
  }, [])

  useEffect(() => {
    getRandomUser().then((user) => {
      setUserData(user.results[0])
    })
  }, [])

  return (
    <>
      <div> {
        userData && <UserCard data={userData} />
      }
      </div>

      <div>
        <h5> Let's fetch data from the database </h5>
        {
          data ? data.map((e) => <PostCard id={e.id} title={e.title} />) : <p>No data found </p>
        }
      </div>
    </>
  )
}

export default App
