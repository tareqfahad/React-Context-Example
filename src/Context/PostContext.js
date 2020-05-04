import React, { createContext, useState } from "react";

export const postContext = createContext();

export const PostProvider = (props) => {
  const [post, setPost] = useState([]);

  return (
    <postContext.Provider value={[post, setPost]}>
      {props.children}
    </postContext.Provider>
  );
};
