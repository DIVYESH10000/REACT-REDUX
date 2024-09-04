// import { useContext, useEffect, useState } from "react";
import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMeassage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);

  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
