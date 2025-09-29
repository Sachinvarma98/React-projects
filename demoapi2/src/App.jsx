import React, { useEffect, useState } from 'react'
import { getPosts } from './api'
import PostCard from './components/PostCard'

function App() {

  const [data, setData] = useState(null)


  useEffect(() => {
    getPosts().then((post) => {
      setData(post);
    })
  }, [])

  return (
    <>
    <div className='post-cards'>
      first api testing 

    {
      data ? data.map((e) => <PostCard id={e.id} userId={e.userId} title={e.title} body={e.body}  /> ) : <p>No data found </p>
    }

    </div>
    </>
  )
}

export default App