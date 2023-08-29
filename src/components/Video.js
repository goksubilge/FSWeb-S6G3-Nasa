import React from "react";

const Video = (props) => {
  return (
    <div>
      <iframe
        width="560"
        heigth="315"
        src={props.videoyaGidenApod.url}
        title={props.videoyaGidenApod.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; syroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
