import React, { useState } from "react";
import { Link } from "react-router-dom";

function Comment({ comment }) {
  // Initial counts (could be from comment data, here just demo values)
  const [likeCount, setLikeCount] = useState(comment.likeCount || 12);
  const [dislikeCount, setDislikeCount] = useState(comment.dislikeCount || 1);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="comment">
      <div className="comment-meta">
        <span className="author-avatar" style={{ width: 24, height: 24 }} />
        <Link className="comment-author" to={`/author/${comment.author.id}`}>{comment.author.name}</Link>
        <span className="comment-date">{comment.date}</span>
        <div className="comment-actions">
          <span className="comment-action-link">Report</span>
        </div>
      </div>
      <div>{comment.content}</div>
      <div className="reactions-bar" style={{ margin: '6px 0 0 0', gap: '32px', justifyContent: 'flex-start', background: 'none', boxShadow: 'none', padding: 0 }}>
        <span
          className="reaction"
          style={{ color: '#f59e42', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
          onClick={handleLike}
        >
          <span role="img" aria-label="like">👍</span> Like {likeCount}
        </span>
        <span
          className="reaction"
          style={{ color: '#f59e42', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
          onClick={handleDislike}
        >
          <span role="img" aria-label="dislike">👎</span> Dislike {dislikeCount}
        </span>
        <span className="comment-reply" style={{ marginLeft: 24, color: '#888', fontWeight: 500, cursor: 'pointer' }}>REPLY</span>
      </div>
    </div>
  );
}

export default Comment; 