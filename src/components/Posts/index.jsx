import React from 'react';
import proptypes from 'prop-types';
import { PostCard } from '../PostCard';

import './styles.css';

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: proptypes.arrayOf(
    proptypes.shape({
      title: proptypes.string.isRequired,
      cover: proptypes.string.isRequired,
      body: proptypes.string.isRequired,
      id: proptypes.number.isRequired,
    }),
  ),
};
