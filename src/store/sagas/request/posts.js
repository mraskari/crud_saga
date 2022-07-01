import axios from "axios";

export const fetchPostsList = (data) => {
  console.log("Fetch data -> ", data);
  return axios.get("http://127.0.0.1:4000/posts");
};

export const addNewPost = (data) => {
  console.log("Add New -> ", data);

  const options = {
    method: "POST",
    data: data,
    url: "http://127.0.0.1:4000/posts",
  };

  return axios(options);
};

export const deleteSinglePost = (data) => {
  console.log("Delete Post -> ", data);
  return axios.delete(`http://127.0.0.1:4000/posts/${data}`);
};

export const editCurrentPost = (data) => {
  console.log("Edit Post -> ", data);
  return axios.put(`http://127.0.0.1:4000/posts/${data.id}`, data);
};
