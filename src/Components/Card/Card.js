import React from 'react';
import './Card.scss';

export const Card = (props) => {

  return (
    <article className="animals">
      <h2>{props.data.name}</h2>
      <h3>{props.data.species}</h3>
      <p>{props.data.description}</p>
      <img className='images' src={props.data.img} alt={props.data.name} />
    </article>
  );
}

export default Card;
