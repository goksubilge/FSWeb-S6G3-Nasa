import React from "react";

function Header (props){
    const {dataProp: apod} = props;
    return (
        <div>
      <h1> {apod.title}</h1>
      <span> {apod.title}</span>
      <p> {apod.date}</p>
      <h1> {apod.explanation}</h1>
      <img src={apod.url} alt = {apod.title} />
      </div>
      );
}
export default Header