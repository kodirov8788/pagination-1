import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentpage, setCurrentpage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  useEffect(() => {

    const getApi = async () => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)

    }

    return () => {
      getApi()
    }
  }, [])

  const indexOfLastPost = currentpage * postsPerPage
  console.log("kopaytirish", currentpage * postsPerPage)
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  console.log("ayirish", indexOfLastPost - postsPerPage)
  const currtentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (number) => setCurrentpage(number)
  return (
    <div className="container">
      <h1 className="text-4xl text-red-400 font-bold shrink-3">My blog</h1>
      <Posts posts={currtentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
