import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const [likes, setLikes] = useState(Number(post.reactions?.likes) || 0);

  const handleLikeButt = () => {
    setLikes(likes + 1);
  };

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
        {post.tags.map((tag, i) => (
          <span key={i} className="badge rounded-pill text-bg-primary hashTag">
            {tag}
          </span>
        ))}
        <p>
          <span className="position-absolute  reactions ">
            <button className="like" onClick={handleLikeButt}>
              <FcLike size={30} />
            </button>
            {`${likes}`}+
          </span>
        </p>
      </div>
    </div>
  );
};
export default Post;
