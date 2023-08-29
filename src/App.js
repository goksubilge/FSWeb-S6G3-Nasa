import React from "react";
import "./App.css";
import { useState } from "react";

import Header from "./components/Header.js";
/*
import body from "./components/body";
import footer from "./components/footer"; */

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
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
