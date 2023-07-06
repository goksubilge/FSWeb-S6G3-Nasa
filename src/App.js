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
  /* const [tarih, setTarih] = useState();
  const [baslik, setBaslik] = useState ();
  const [copy, setCopy] = useState ();
  const [exp, setExp] = useState(); */

  // useEffect ile axios ile APOD'tan veri alıyoruz. useEffect bir defa okuyordu, hatırlayalım.
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe")
    .then(function(response){
      console.log(response);
      setApod(response.data);
  }).catch (function(error){
    console.log (error);
  })}, [] )


  return (
    <div className="App">
      <p>
        {/*birinci süslü parantezde apod.title yoksa yani internet hızı yavaşken oluyo bu, 
        title a ualşana kadar geçen sürede yükleniyor yazısı gösterilecek */} 
        <span role="img" aria-label='go!'>
    {!Object.keys(apod).length && <p> ...Yükleniyor!!!</p>}
    {apod.title /* ya da Object.keys(apod).length yazabilirdim */ && <Header dataProp= {apod} />}
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
