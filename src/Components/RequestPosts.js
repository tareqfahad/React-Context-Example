import React, { useContext } from "react";
import { getAllPost } from "../Context/APICalls";
import { postContext } from "../Context/PostContext";

const RequestPost = () => {
  const [post, setPost] = useContext(postContext);

  const requestHandler = async () => {
    const request = await getAllPost();
    setPost(request);
  };

  return <button onClick={requestHandler}>Get Request</button>;
};

export default RequestPost;
