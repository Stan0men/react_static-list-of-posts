import React from 'react';
import Post from './Post';

import posts from './api/posts';

const PostList = () => (
  <div>
    <Post posts={posts} />
  </div>
);

export default PostList;
