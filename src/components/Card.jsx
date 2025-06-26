import React from "react";
import "../App.css";

function Card({ title, children, onClose }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <h2>{title}</h2>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
