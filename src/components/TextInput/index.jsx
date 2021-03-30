import React from 'react';
import proptypes from 'prop-types';

import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      value={searchValue}
      onChange={handleChange}
      type="search"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: proptypes.string.isRequired,
  handleChange: proptypes.func.isRequired,
};
