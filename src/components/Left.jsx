"use client";
import { useEffect, useState } from "react";

export const Left = () => {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("ulaanbaator");
  const [minGradus, setMinGradus] = useState("");
  const [maxGradus, setMaxGradus] = useState("");
  const [text, setText] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json(); //object bolgoj bga
    let incomeCities = data.data.map((country) => country.cities).flat();
    ///datagiin datamap,flat olon array iig neg arrayd niiluulne gesen ug map ergej baigaa ni array gargaj irhiin tuld
    setCities(incomeCities); // buh hotood cities dotor orson
  }
  async function getWeather(selectedCity) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=263d2a48c3c342af89a21154250801&q=${selectedCity}`
    );
    const data = await result.json();
    let incomeMaxCelsius = data.forecast.forecastday[0].day.maxtemp_c;
    let incomeMinCelsius = data.forecast.forecastday[0].day.mintemp_c;
    let incomeLeftText = data.current.condition.text;
    console.log(incomeLeftText);
    setMaxGradus(incomeMaxCelsius);
    setMinGradus(incomeMinCelsius);
    setText(incomeLeftText);
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getWeather(selectedCity);
  }, [selectedCity]);
  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase(); ///useg tanidag jijig tom useg
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(search)
    );
    setSearched(filtered);
  };

  const addHandler = (city) => {
    setSelectedCity(city);
    setSearched([]);
  };

  return (
    <div className="flex gap-10 relative h-[100vh] w-[100vw]">
      <div className="absolute p-10">
        <input
          type="text"
          className="border-2 border-black"
          onChange={searchHandler}
        />
        <div className="flex flex-col gap-2">
          {searched.length > 0 &&
            searched.slice(0, 5).map((city, index) => (
              <button key={index} onClick={() => addHandler(city)}>
                {city}
              </button>
            ))}
          <p>{selectedCity}</p>
          <p>Сонгогдсон хот: {selectedCity}</p>
          <p>Цаг агаар: {text}</p>
          <p>Хамгийн бага градус: {minGradus}°C</p>
          <p>Хамгийн их градус: {maxGradus}°C</p>
        </div>
      </div>

      <div className="absolute border-2 border-muted-foreground/20 rounded-full h-[100px] w-[100px]">
        middle circle
      </div>
    </div>
  );
};
