import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div>
    {
      props.posts.map(post => <p>{post.title}</p>)
    }
  </div>
);

Post.propType = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default Post;
