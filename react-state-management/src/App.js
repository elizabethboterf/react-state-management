import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const handleDelete= (indexToDelete)=>{
    setPosts((currentPosts)=>
            currentPosts.filter((ignored, i)=>
            i!==indexToDelete)
    );
  };

  return (
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;