import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";

function Post({ post }) {
  const [activeReaction, setActiveReaction] = useState(null);
  return (
    <div>
      <div className="post-image" style={post.imageStyle || {}} />
      <div className="post-meta">
        <span className="author-avatar" />
        <Link className="author-link" to={`/author/${post.author.id}`}>{post.author.name}</Link>
        <span className="post-date">{post.date}</span>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="reactions-bar">
        {post.reactions && post.reactions.map((icon, idx) => (
          <button
            key={icon}
            className={`reaction${activeReaction === idx ? " active" : ""}`}
            onClick={() => setActiveReaction(idx)}
            aria-label={`React with ${icon}`}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

Post.Comment = Comment;

export default Post; 