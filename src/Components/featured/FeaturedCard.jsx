import React from "react";
import { featured } from "../../Data/data";
import './Featured.css'
function FeaturedCard() {
  return (
    <div className="row features  mt-5 m-0">
      {featured.map((feature, index) => (
        <div key={index + 1} className="box text-center p-3">
          <img className="mb-3" src={feature.cover} alt="feature" />
          <h3>{feature.name}</h3>
          <p>{feature.total}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedCard;
