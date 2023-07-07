import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js"
/*
import body from "./components/body";
import footer from "./components/footer"; */

function App() {
  const [apod, setApod] = useState({});
  const [date, setdate] = useState(new Date().toISOString().slice(0,10));
  const [error,setError] = useState(null);
  /*
  const [baslik, setBaslik] = useState ();
  const [copy, setCopy] = useState ();
  const [exp, setExp] = useState(); */


  // useEffect ile axios ile APOD'tan veri alıyoruz. useEffect bir defa okuyordu, hatırlayalım.
  // axios ta get ile kökleri verebilirsin sonra da parametreleri de yazabilirsin, yeni bir obje açarak.
  // .get ('user', {params: {ID:12345}})
  // date: date bağladık dinamik olsun diye, useState i de default değerini günün tarihi yaptık.
  //yseEffect te state değşince tekrar çalışsın diye gidip [date] yazdık, date tetiklendiğinde tekrar çalışacak fonksiyon
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: "CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe",
        date: date,
      }
      })
    .then(function(response){
      console.log(response);
      setApod(response.data);
  }).catch (function(error){
    console.log (error);
    setError(error.message)
  })}, [date] )

  const dateHandler = (e) => {
    console.log (e.target.value)
    setdate (e.target.value);
  }

  return (
    <div className="App">
      <p>
        {/*birinci süslü parantezde apod.title yoksa yani internet hızı yavaşken oluyo bu, 
        title a ualşana kadar geçen sürede yükleniyor yazısı gösterilecek */} 
        <span role="img" aria-label='go!'>
    {!Object.keys(apod).length && <p> ...Yükleniyor!!!</p>}
    {Object.keys(apod).length /* ya da apod.title yazabilirdim */ && <Header dataProp= {apod} />}
        <input type="date" id="date" name="date" onChange={dateHandler} />
        {/*inputu ekledik ki ekranda tarih bilgisi seçebilelim. dateHandler (bir event fnk) atadık */}
    {error && <p> Network Error : {error}</p>}
    {/*burda dedik ki error verirse bize git <p>error<p> yazdır. bunun da içini catch in altındaki
    setError u tanımlayarak yaptık.*/}
    </span>
      </p>
    </div>
  );
}


export default App;

// resim linkleri:
// https://apod.nasa.gov/apod/image/2307/CocoaBeach_BuckMoon_Seeley-201_1100.jpg
// https://www.webtekno.com/images/editor/default/0004/04/a24e0ea25ae775d693dd370efec96b4a395a20dc.jpeg
// https://api.nasa.gov/planetary/apod?api_key=CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe&date=2014-12-01 alternatif1
// https://api.nasa.gov/planetary/apod?api_key=CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe&date=2020-04-19 videolu
// https://api.nasa.gov/planetary/apod?api_key=CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe
