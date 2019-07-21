import React from 'react';

import './App.css';
import PostList from './PostList';
// import posts from './api/posts';
// import comments from './api/comments';
// import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>Post list</span>
      <PostList />
    </p>

    <p>
      <span>Comments list </span>
      <CommentList />
    </p>

    <p>
      <span>User </span>
      <User />
    </p>
  </div>
);

const CommentList = () => (
  <div>
    <Comment />
  </div>
);
const Comment = () => (
  <div>
    Comment
  </div>
);

const User = () => (
  <div>
    user info
  </div>
);

export default App;
