import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

// Pure Function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

// Creating a provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // AddPost
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
        userId: userId,
      },
    });
  };
  // AddPosts
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  // DeletePost
  const deletePost = useCallback(
    (postId) => {
      console.log(`Item to delete: ${postId}`);
      dispatchPostList({ type: "DELETE_POST", payload: { postId } });
    },
    [dispatchPostList]
  );

  // Example of useMemo() hook

  const arr = [5, 6, 7, 8123, 456, 66];
  const sortedArr = useMemo(arr.sort(), [arr]);

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
