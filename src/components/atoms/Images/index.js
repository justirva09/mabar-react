import React from 'react';


const Images = (props) => {
  if(props.isBackground) {
    return <div className="images--background"   style={{background: `url(${props.image})`}} />
  }
  
  return <img width="100%" alt="ini gambranya gan!" src={props.image} />  
}

export default Images;
