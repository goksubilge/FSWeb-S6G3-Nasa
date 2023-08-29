import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";

/*
const [baslik, setBaslik] = useState ();
const [copy, setCopy] = useState ();
const [exp, setExp] = useState(); */

const Header = (props) => {
  const { date, setDate } = props;
  const [apod, setApod] = useState({});
  const [error, setError] = useState(null);

  const dateHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "CaxSuXdVT3QdQ2dD9TYfN14Ne1Og3TgUH1MHVJbe",
          date: date,
        },
      })
      .then(function (response) {
        console.log(response);
        setApod(response.data);
        setError(null);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(function () {});
  }, [date]);

  return (
    <div>
      <div className="discover">
        <div className="title">
          <h3>CHOOSE YOUR ASTRONOMY PICTURE | VIDEO OF THE DAY</h3>
          <p>discover the cosmos everday</p>
        </div>
      </div>
      <p>
        {/*birinci süslü parantezde apod.title yoksa yani internet hızı yavaşken oluyo bu, 
      title a ualşana kadar geçen sürede yükleniyor yazısı gösterilecek */}
        <span role="img" aria-label="go!">
          {Object.keys(apod).length === 0 && !error && <p> ...Yükleniyor!!!</p>}
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={dateHandler}
          />
          {/*inputu ekledik ki ekranda tarih bilgisi seçebilelim. dateHandler (bir event fnk) atadık */}
          {Object.keys(apod).length > 0 /* ya da apod.title yazabilirdim */ &&
            !error && <Main dataProp={apod} />}
          {error && <p> Network Error : {error}</p>}
          {/*burda dedik ki error verirse bize git <p>error<p> yazdır. bunun da içini catch in altındaki
  setError u tanımlayarak yaptık.*/}
        </span>
      </p>
    </div>
  );
};

export default Header;
