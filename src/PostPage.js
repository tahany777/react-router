import React from "react";
import { useParams, Link } from "react-router-dom";
// import { useContext } from 'react';
// import DataContext from './context/DataContext';
import { useNavigate } from "react-router-dom";
// import api from './api/posts';
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostyId = useStoreState((state) => state.getPostById);
  const post = getPostyId(id);
  // const { posts, setPosts } = useContext(DataContext);
  // const post = posts.find((post) => post.id.toString() === id);
 
  const handleDelete = async (id) => {
    // try {
    //   await api.delete(`/posts/${id}`);
    //   const postsList = posts.filter((post) => post.id !== id);
    //   setPosts(postsList);
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
    deletePost(id);
    navigate('/');
  };
  
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && 
        <>
         <h2>Post Not Found</h2>
         <p className="postDate">Well, that's disappointing.</p>
         <p className="postBody"><Link to="/">Visit Our HomePage</Link></p>
         <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </>
        }
      </article>
    </main>
  );
};

export default PostPage;
