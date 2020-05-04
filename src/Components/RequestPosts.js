import React, { useContext, useState } from "react";
import { getAllPost } from "../Context/APICalls";
import { postContext } from "../Context/PostContext";

const RequestPost = () => {
  const [post, setPost] = useContext(postContext);
  const [buttonState, setButton] = useState();

  const requestHandler = async () => {
    const resutls = await getAllPost();
    setButton("disable");
    setPost(resutls);
  };

  return <button onClick={requestHandler}>Get Request</button>;
};

export default RequestPost;
