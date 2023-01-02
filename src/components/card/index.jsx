import React from "react";
import MoreInfo from "./components/MoreInfo";
import "./index.css";

function Card({ title, image, moreInfo }) {
  const imgStyle = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className="card">
      <div className="card-image" style={imgStyle} alt=""></div>
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
