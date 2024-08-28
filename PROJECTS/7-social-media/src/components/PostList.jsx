import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postlist);
  return (
    <>
      {postList.map((post, index) => (
        <Post key={index} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
