import React from "react";

function PostDetails() {
  return (
    <div className="postDetails">
      <span className="postDetails__author">John Doe</span>
      <div className="postDetails__categories">
        <span className="postDetails_category">Technology</span>
        <span className="postDetails_category">Coding</span>
      </div>
      <time className="postDetails__date" dateTime="">
        2 hours ago
      </time>
    </div>
  );
}

export default PostDetails;
