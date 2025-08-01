
import { useEffect, useState } from "react"
import { getPosts } from "./api"
import PostCard from "./components/PostCard";
function App() {

  const [data, setdata] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
  }, [])
  return (
    <>
      <div>
        {
          data ? data.map((e) => <PostCard title={e.title} body={e.body} id={e.id} userId={e.userId} /> ) : <p>No data</p>
        }
      </div>
    </>
  )
}

export default App
