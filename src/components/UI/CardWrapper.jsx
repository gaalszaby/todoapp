import React from "react";

const CardWrapper = (props) => {
  return (
    <div className="outer-wrapper">
      <div className="card-wrapper">{props.children}</div>
    </div>
  );
};

export default CardWrapper;
