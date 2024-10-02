import { memo } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
const Post = memo(() => {
  return <div>
      <h1>Post Content</h1>
    </div>;
});
export default Post;