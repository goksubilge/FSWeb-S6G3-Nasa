import React from "react";
import Video from "./Video";
import Img from "./Img";

function Main(props) {
  const { dataProp: apod } = props;

  return (
    <div>
      {<h1> {apod.title}</h1>}
      {<span> {apod.date}</span>}
      {<p> {apod.explanation}</p>}
      {apod.media_type === "video" && <Video videoyaGidenApod={apod} />}

      {apod.media_type === "image" && <Img imgyeGidenApod={apod} />}
    </div>
  );
}
export default Main;
