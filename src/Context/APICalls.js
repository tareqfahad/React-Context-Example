import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const checkRequest = (req) => {
  console.log(req);
};

export const getAllPost = async () => {
  const results = await axios.get(url);

  return {
    ...results,
  };
};

export const getPostById = async (id) => {
  const results = await axios.get(url + `/${id}`);

  return {
    ...results,
  };
};
