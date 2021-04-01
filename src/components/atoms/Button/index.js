import { React, PropTypes } from 'libraries';


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
