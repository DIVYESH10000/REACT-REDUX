import { useCallback, useState, useEffect } from "react";
import { createContext, useReducer } from "react";
import { useActionData } from "react-router-dom";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  // fetching: false,
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
    newPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

// Creating a provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // const [fetching, setFetching] = useState(false);

  // AddPost
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
        // id: Date.now(),
        // title: postTitle,
        // body: postBody,
        // reactions: reactions,
        // tags: tags,
        // userId: userId,
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

  // useEffect(() => {
  //   setFetching(true);

  const controller = new AbortController();
  const signal = controller.signal;

  // Not Needed as we're using Loder functionality

  // fetch("https://dummyjson.com/posts", { signal })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     addInitialPosts(data.posts);
  //     setFetching(false);
  //   })
  //   .catch((error) => {
  //     if (error.name === "AbortError") {
  //       console.log(`Fetch aborted`);
  //     } else {
  //       console.error(`Fetch error:`, error);
  //     }
  //   });

  //   return () => {
  //     // console.log(`Cleaning up useEffect`);
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

// Example of useMemo() hook

// const arr = [5, 6, 7, 8123, 456, 66];
// const sortedArr = useMemo(arr.sort(), [arr]);
