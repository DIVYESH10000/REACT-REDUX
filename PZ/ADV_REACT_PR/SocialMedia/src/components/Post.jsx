import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  // Help
  // Default to 0 if reactions or likes are undefined or not a number
  const likes = Number(post.reactions?.likes) || 0;

  return (
    <div className="card postCard" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>

        <p className="card-text ">{post.body}</p>
        {post.tags.map((_, i) => (
          <span key={i} className="badge rounded-pill text-bg-primary hashTag">
            {_ + " "}
          </span>
        ))}
        <p>
          <span className="position-absolute  reactions ">
            <FcLike size={30} />
            {`${likes - 1}`}+
          </span>
        </p>
      </div>
    </div>
  );
};
export default Post;
