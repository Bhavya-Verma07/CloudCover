import React, { useEffect, useState } from "react";
import "./style.css";

export const Tempapp = () => {
  const [city, setCity] = useState("null");
  const [search, setSearch] = useState("Gorakhpur");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7ca7d8affc54e6a46a66d13ae6ba1f2f`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i
                  className="fa-sharp fa-solid fa-street-view"
                  style={{ marginRight: "5px" }}
                ></i>
                {search}
              </h2>
              <h1 className="tempview">{city.temp}deg Cel</h1>
              <h3 className="tempmin_max">Min : {city.temp_min}deg Cel  | Max : {city.temp_max}deg Cel</h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};

//7ca7d8affc54e6a46a66d13ae6ba1f2f
