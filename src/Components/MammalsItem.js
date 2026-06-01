import React from "react";

function MammalsItem({ image,name,nbLegs, onSeeMore }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Number of Legs: {nbLegs}</p>
      <button onClick={() => onSeeMore(name)}>See More</button>
    </div>
  );
}

export default MammalsItem;