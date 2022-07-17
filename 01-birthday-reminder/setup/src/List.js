import React from 'react';
import "./List.css";

export const List = ({name, image, age}) => {
  return (
    <article>
      <img src={image} alt={`${name}'s avatar`}/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default List;
