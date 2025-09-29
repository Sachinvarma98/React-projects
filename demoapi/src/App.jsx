import { useState, useEffect, } from "react"
import { getPosts , getRandomuser} from "./api"
import './App.css'
import PostCard from "./components/postCard";
import UserCard from "./components/UserCard";

function App() {

  const [data, setData] = useState(null);
  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });

  }, []);

  useEffect(() => {
    getRandomuser().then((user) => {
      setuserdata(user.results[0])
    }
    )
  }, [])

  return (
    <>

   { userdata &&  <UserCard data={userdata} />}

  {
    data ? data.map((e) =>  <PostCard title={e.title} body={e.body } />) : <p>No data </p> 
  }
  

    </>
  )
}

export default App
