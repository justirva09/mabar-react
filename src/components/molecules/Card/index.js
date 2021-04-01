import React from 'react';
import PropTypes from 'prop-types';
import { Images } from 'components/atoms';

const Card = ({data}) => {
  return(
    <div className="card">
      <div className="card__inner">
        <div className="card__header">
          <Images image={data ? data.image : ""}  />
        </div>
        <div className="card__body">
          <h1>{data ? data.title : "Undefined"}</h1>
          <hr />
          {/* <div dangerouslySetInnerHTML={{__html: data.html}} /> */}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card;
