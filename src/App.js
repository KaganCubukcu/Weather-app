import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/tr";

import { MainContext } from "./components/context";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Images from "./components/Images";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("Ankara");

  //API
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&alerts=no&days=7&lang=tr`;

  const momentAll = {
    momentNow: moment().format("Do MMMM YYYY"),
    momentHour: moment().format("LT"),
    momentNextDay: moment().add(1, "days").format("Do MMMM YYYY"),
    momentTwoNextDay: moment().add(2, "days").format("Do MMMM YYYY"),
  };

  const searchLocation = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const condition = data && data.current.condition.text;

  const time = momentAll.momentHour;

  const dayCycle = time < "18:00" ? "Morning" : "Evening";

  const conditions = {
    Güneşli: "clear",
    Açık: "clear",
    Bulutlu: "cloudy",
    "Parçalı Bulutlu": "cloudy",
    "Çok bulutlu": "cloudy",
    Puslu: "cloudy",
    "Hafif yağmurlu": "rain",
    "Ara ara orta kuvvetli yağmurlu": "rain",
    "Orta kuvvetli yağmurlu": "rain",
    "Ara ara şiddetli yağmurlu": "rain",
    "Şiddetli yağmurlu": "rain",
    "Şiddetli sağnak yağmur": "rain",
    "Bölgesel düzensiz yağmur yağışlı": "rain",
    "Bölgesel gök gürültülü düzensiz hafif yağmur": "rain",
    "Hafif sağnak yağışlı": "rain",
    "Bölgesel düzensiz gök gürültülü yağmurlu": "storm",
    "Kar fırtınası": "snow",
    "Düzensiz hafif karlı": "snow",
    "Hafif karlı": "snow",
    "Orta kuvvetli karlı": "snow",
    "Yoğun kar yağışlı": "snow",
    Kapalı: "overcast",
    Sisli: "overcast",
  };

  const coditionStyleDay = {
    background: `url(${Images.day[conditions[condition]]}) no-repeat center`,
  };

  const coditionStyleNight = {
    background: `url(${Images.night[conditions[condition]]}) no-repeat center`,
  };
  const dataContext = {
    data,
    setData,
    location,
    setLocation,
    searchLocation,
    momentAll,
  };

  return (
    <div
      style={{
        background:
          dayCycle === "Morning"
            ? coditionStyleDay.background
            : coditionStyleNight.background,
        height: "100vh",
      }}
    >
      <MainContext.Provider value={dataContext}>
        <Dropdown />
        <MainContent />
        <Card />
        <Navbar />
      </MainContext.Provider>
    </div>
  );
}

export default App;
