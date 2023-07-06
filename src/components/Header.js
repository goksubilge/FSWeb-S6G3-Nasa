import React from "react";
// <img src={apod.url} alt = {apod.title} /> bunu da yalnızca url göstermek için kullanmıştım
function Header (props){
    const {dataProp: apod} = props;
    return (
    <div>
      <h1> {apod.title}</h1>
      <span> {apod.date}</span>
      <p> {apod.explanation}</p>
        {apod.media_type === "video" && (
            <iframe 
            width="560"
            heigth="315"
            src={apod.url}
            title={apod.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; syroscope; picture-in-picture" 
            allowfullscreen></iframe>)
        }

        {apod.media_type === "video" && 
            <img src={apod.url} alt={apod.title}/>  
        }
    </div>
      );
}
export default Header