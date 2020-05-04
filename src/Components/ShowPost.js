import React, { useContext, useState } from "react";
import { postContext } from "../Context/PostContext";
import { getPostById } from "../Context/APICalls";

export default function ShowPost() {
  const [post] = useContext(postContext);
  const { data } = post;

  const getSinglePost = async (id) => {
    const request = await getPostById(id);

    alert(request.data.body);
  };

  return (
    <div>
      {!data ? (
        <div />
      ) : (
        data.map((i, x) => (
          <h1 key={i.id} onClick={() => getSinglePost(i.id)}>
            {i.body}
          </h1>
        ))
      )}
    </div>
  );
}
