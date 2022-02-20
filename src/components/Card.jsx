import React from "react";

const Card = ({ item: { id, title, body, image }}) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`src/public/${image}`} alt={title} />
      </div>
    </div>
  );
};

export default Card;
