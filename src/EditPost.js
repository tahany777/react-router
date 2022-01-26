import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
// import api from "./api/posts";
// import DataContext from "./context/DataContext";
// import { useEffect, useContext, useState } from "react";
const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const editPost = useStoreActions((actions) => actions.savePost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const getPostyId = useStoreState((state) => state.getPostById);
  const post = getPostyId(id);

  
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const post = posts.find((post) => post.id.toString() === id);
  // const { posts, setPosts } = useContext(DataContext);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };
    // try {
    //   const response = await api.put(`/posts/${id}`, updatedPost);
    //   setPosts(
    //     posts.map((post) => (posts.id === id ? { ...response.data } : post))
    //   );
    //   setEditTitle("");
    //   setEditBody("");
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
    editPost(updatedPost);
    navigate(`/post/${id}`);
  };
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Body:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="button" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our HomePage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
