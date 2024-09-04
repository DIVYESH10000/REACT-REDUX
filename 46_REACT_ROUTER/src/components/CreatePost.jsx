import { useContext } from "react";
// import { useRef } from "react";
import { PostList } from "../store/post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const reactions = reactionsElement.current.value;
  // const tags = tagsElement.current.value.split(/\s+/);
  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // reactionsElement.current.value = "";
  // tagsElement.current.value = "";
  // addPost(userId, postTitle, postBody, reactions, tags);
  // };

  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          // ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          // ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="How are you feeling today ?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          // ref={postBodyElement}
          rows="4"
          type="text"
          className="form-control"
          id="body"
          name="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of reactions
        </label>
        <input
          // ref={reactionsElement}
          type="number"
          className="form-control"
          id="reactions"
          name="reactions"
          placeholder="Reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          // ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter your tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

//By default action function gets a -----> data Object
export async function createPostAction(data) {
  const { addPost } = useContext(PostList);
  // How to get the data, using an async method data.request.formData()
  // instead of .then we can use async awaits also.
  // whenever we use await we must declare the function as async function

  //-------------------------- Important --------------------------------------------------//
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
    // JSON.stringify({
    //   title: postTitle,
    //   body: postBody,
    //   reactions: { likes: reactions },
    //   userId: userId,
    //   tags: tags,
    // }),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);

      // navigate("/"); // Can provide any path
    });
  return redirect("/");
}

export default CreatePost;

/*
split() Method: The split() method is used to divide a string into an array of substrings based on a specified delimiter.

Regular Expression /\s+/:

\s: This matches any whitespace character (space, tab, newline, etc.).
+: This is a quantifier that means "one or more" of the preceding element. So, \s+ matches one or more whitespace characters.
Usage: tags.split(/\s+/) splits the tags string wherever there is one or more whitespace characters. This means multiple spaces, tabs, or any other whitespace characters between tags will be treated as a single delimiter.

*/
