import React from "react";
import "./style.css";
const Card = ({ link, img, detail, branding, cost }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="Card img cap" />
      <div className="card-body">
        <a href={`/book/${link}`} className="card-title">{detail} </a>
        <p className="card-text">{branding}</p>
        <p className="cost">{cost}</p>
        
      </div>
    </div>
  );
};

export default Card;
