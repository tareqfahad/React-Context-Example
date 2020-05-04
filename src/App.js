import React from "react";
import "./App.css";
import RequestPost from "./Components/RequestPosts";
import ShowPost from "./Components/ShowPost";
import { PostProvider } from "./Context/PostContext";

function App() {
  return (
    <PostProvider>
      <div className="App">
        <h1>Get Post </h1>
        <RequestPost />
        <ShowPost />
      </div>
    </PostProvider>
  );
}

export default App;
