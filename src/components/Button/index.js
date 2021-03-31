import React from 'react';
import PropTypes from 'prop-types';


// const Button = (props) => {
//   return <button>{props.children}</button>
// };

const Button = (props) => {
  return <button  onClick={props.onClick} {...props}>{props.children}</button>
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
};

export default Button;
