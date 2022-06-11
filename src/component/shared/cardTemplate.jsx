import React from "react";

function CardTemplate({ children }) {
  return (
    <>
      <div className="card">{children}</div>
    </>
  );
}

export default CardTemplate;
