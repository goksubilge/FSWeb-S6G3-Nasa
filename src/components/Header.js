import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";
import DatePicker from "./DatePicker";

const Header = (props) => {
  const { date, setDate } = props;
  const [apod, setApod] = useState({});
  const [error, setError] = useState(null);

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
        <span role="img" aria-label="go!">
          <DatePicker date={date} setDate={setDate} />
          {Object.keys(apod).length === 0 && !error && <p> ...Yükleniyor!!!</p>}
          {Object.keys(apod).length > 0 && !error && <Main dataProp={apod} />}
          {error && <p> Network Error : {error}</p>}
        </span>
      </p>
    </div>
  );
};

export default Header;
