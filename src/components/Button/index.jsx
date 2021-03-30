import React from 'react';
import proptypes from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: proptypes.string.isRequired,
  onClick: proptypes.func.isRequired,
  disabled: proptypes.bool,
};
