import React from "react";

const Img = (props) => {
  const { imgyeGidenApod: apod } = props;
  return (
    <div>
      <img src={apod.url} alt={apod.title} />
    </div>
  );
};

export default Img;
