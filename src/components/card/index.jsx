import React from "react";
import MoreInfo from "./components/MoreInfo";
import "./index.css";

function Card({ title, image, moreInfo }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-more-info">
          <MoreInfo text={moreInfo} />
        </div>
      </div>
    </div>
  );
}

export default Card;
