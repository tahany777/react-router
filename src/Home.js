import React from "react";
import Feed from "./Feed";
// import { useContext } from 'react';
// import DataContext from './context/DataContext';
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  console.log(isLoading, fetchError);
  // const { searchResult, fetchError, isLoading } = useContext(DataContext);
  const searchResult = useStoreState((state) => state.searchResult);
  return (
    <main className="Home">
      {/* {posts.length ? (
               <Feed posts={posts} />
           ) : (
               <p style={{ marginTop: "2rem" }}>
                   No Posts to display
               </p>
           )} */}
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <p className="statusMsg">No Posts to display</p>
        ))}
    </main>
  );
};

export default Home;
