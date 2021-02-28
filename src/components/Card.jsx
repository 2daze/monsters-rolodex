import React from 'react';
import './Card.styles.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt="moster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};


