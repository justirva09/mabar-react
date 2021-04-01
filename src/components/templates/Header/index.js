import React from 'react';
import PropTypes from 'prop-types';

const styleText = {
  color: "blue",
  borderBottom: "1px solid #333",
  paddingBottom: 15
}

const Header = (props) => {
  return(
    <header>
      <div>
        <h1 style={styleText}>{props.title}</h1>
      </div>
    </header>
  )
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Undefined"
};


export default Header;

