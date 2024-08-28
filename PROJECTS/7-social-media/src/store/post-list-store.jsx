import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
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
  }

  return newPostList;
};

// Creating a provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  // AddPost
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
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

  // DeletePost
  const deletePost = (postId) => {
    console.log(`Item to delete: ${postId}`);
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "On my way to DEF-CON",
    body: `Hello people, finally am on my way to DEF-CON, don't worry I'll cover eve'thng for you guys too...\n
    Stay tuned for more updates`,
    reactions: 22,
    userID: "user-9",
    tags: ["Travel", "Learning", "Exciting"],
  },

  {
    id: "2",
    title: "VEGAS here I come!!!",
    body: `Hello fellow forum fans,
           The time is here.\nam at Terminal 2 Heathrow,\n awaiting my 3:30pm flight.`,
    reactions: 72,
    userID: "user-12",
    tags: [" Party", " Money", " Honey"],
  },
];

export default PostListProvider;
