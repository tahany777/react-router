import React from "react";
// import { useContext, useState } from "react";
// import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";
// import api from './api/posts';
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const { posts, setPosts} = useContext(DataContext);
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, dateTime, body: postBody };
    // try {
    //   const response = await api.post("/posts", newPost);
    //   const allPosts = [...posts, response.data];
    //   setPosts(allPosts);
    //   setPostTitle("");
    //   setPostBody("");
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
    navigate("/");
    savePost(newPost);
  };
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Body:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
