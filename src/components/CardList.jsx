import React from 'react';
import './CardList.styles.css';
import { Card } from './Card';

export const CardList = props =>{
  const monsterList = () => { 
    return props.monsters.map(monster => {
      return <Card key={monster.id} monster={monster} />;
    });
  };

  console.log(monsterList);
  return (
    <div className="card-list"> {monsterList()} </div>
  );
};


