import React from 'react';
import proptypes from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: proptypes.string.isRequired,
  cover: proptypes.string.isRequired,
  body: proptypes.string.isRequired,
  id: proptypes.number.isRequired,
};
