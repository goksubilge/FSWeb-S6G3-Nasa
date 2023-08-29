import React from "react";

function Main(props) {
  const { dataProp: apod } = props;

  return (
    <div>
      {<h1> {apod.title}</h1>}
      {<span> {apod.date}</span>}
      {<p> {apod.explanation}</p>}
      {apod.media_type === "video" && (
        <iframe
          width="560"
          heigth="315"
          src={apod.url}
          title={apod.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; syroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}

      {apod.media_type === "image" && <img src={apod.url} alt={apod.title} />}
    </div>
  );
}
export default Main;

// <img src={apod.url} alt = {apod.title} /> bunu da yalnızca url göstermek için kullanmıştım

// useEffect ile axios ile APOD'tan veri alıyoruz. useEffect bir defa okuyordu, hatırlayalım.
// axios ta get ile kökleri verebilirsin sonra da parametreleri de yazabilirsin, yeni bir obje açarak.
// .get ('user', {params: {ID:12345}})
// date: date bağladık dinamik olsun diye, useState i de default değerini günün tarihi yaptık.
//yseEffect te state değşince tekrar çalışsın diye gidip [date] yazdık, date tetiklendiğinde tekrar çalışacak fonksiyon

/*  Bu bir sayfa URL i 
std hdml tag i; ileri geri control etmek için controls kısmı
<video height="240" weight="320" controls >
    <source type="video/mp4" source="url/......">
    </source>
</video> */

/* bizim burdaki video oynatabilmemiz için direkt videonun URl ini vermemiz gerekiyor */
