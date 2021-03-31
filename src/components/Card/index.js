import React from 'react';
import PropTypes from 'prop-types';


const Images = (props) => {
  if(props.isBackground) {
    return <div className="images--background"  style={{background: `url(${props.image})`}} />
  }
  
  return <img width="100%" src={props.image} />  
}



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
