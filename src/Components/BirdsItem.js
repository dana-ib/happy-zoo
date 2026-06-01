import React from "react";

function BirdsItem({ image,name,canFly,onSeeMore}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{canFly ? "Can Fly" : "Cannot Fly"}</p>
      <button onClick={() => onSeeMore(name)}>See More</button>
    </div>
  );
}

export default BirdsItem;