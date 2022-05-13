import { useState } from "react";
import { MainContext } from "./components/context";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Images from "./components/Images";
import moment from "moment";
import "moment/locale/tr";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("Ankara");
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
      const response = await axios.get(url).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const condition = data && data.current.condition.text;

  const time = momentAll.momentHour;

  const dayCycle = `${
    (time < "18:00" && "Morning") || (time > "18:01" && "Morning") || "None"
  }`;

  const coditionStyleDay = {
    background:
      condition === "Güneşli" || condition === "Açık"
        ? `url(${Images.day.clear}) no-repeat center`
        : condition === "Bulutlu" ||
          condition === "Parçalı Bulutlu" ||
          condition === "Çok bulutlu"
        ? `url(${Images.day.cloudy}) no-repeat center `
        : condition === "Hafif yağmurlu" ||
          condition === "Ara ara orta kuvvetli yağmurlu" ||
          condition === "Orta kuvvetli yağmurlu" ||
          condition === "Ara ara şiddetli yağmurlu" ||
          condition === "Şiddetli yağmurlu" ||
          condition === "Şiddetli sağnak yağmur" ||
          condition === "Bölgesel düzensiz yağmur yağışlı" ||
          condition === "Bölgesel gök gürültülü düzensiz hafif yağmur" ||
          condition === "Hafif sağnak yağışlı"
        ? `url(${Images.day.rain}) no-repeat center`
        : condition === "Bölgesel düzensiz gök gürültülü yağmurlu"
        ? `url(${Images.day.storm}) no-repeat center`
        : condition === "Kar fırtınası" ||
          condition === "Düzensiz hafif karlı" ||
          condition === "Hafif karlı" ||
          condition === "Orta kuvvetli karlı" ||
          condition === "Yoğun kar yağışlı"
        ? `url(${Images.day.snow}) no-repeat center`
        : condition === "Kapalı" ||
          condition === "Çok bulutlu" ||
          condition === "Sisli"
        ? `url(${Images.day.overcast}) no-repeat center`
        : null,
  };
  const coditionStyleNight = {
    background:
      condition === "Güneşli" || condition === "Açık"
        ? `url(${Images.night.clear}) no-repeat center`
        : condition === "Bulutlu" ||
          condition === "Parçalı Bulutlu" ||
          condition === "Çok bulutlu"
        ? `url(${Images.night.cloudy}) no-repeat center `
        : condition === "Hafif yağmurlu" ||
          condition === "Ara ara orta kuvvetli yağmurlu" ||
          condition === "Orta kuvvetli yağmurlu" ||
          condition === "Ara ara şiddetli yağmurlu" ||
          condition === "Şiddetli yağmurlu" ||
          condition === "Şiddetli sağnak yağmur" ||
          condition === "Bölgesel düzensiz yağmur yağışlı" ||
          condition === "Bölgesel gök gürültülü düzensiz hafif yağmur" ||
          condition === "Hafif sağnak yağışlı"
        ? `url(${Images.night.rain}) no-repeat center`
        : condition === "Bölgesel düzensiz gök gürültülü yağmurlu"
        ? `url(${Images.night.storm}) no-repeat center`
        : condition === "Kar fırtınası" ||
          condition === "Düzensiz hafif karlı" ||
          condition === "Hafif karlı" ||
          condition === "Orta kuvvetli karlı" ||
          condition === "Yoğun kar yağışlı"
        ? `url(${Images.night.snow}) no-repeat center`
        : condition === "Kapalı" ||
          condition === "Çok bulutlu" ||
          condition === "Sisli"
        ? `url(${Images.night.cloudy}) no-repeat center`
        : null,
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
      style={
        dayCycle === "Morning"
          ? { background: `${coditionStyleDay.background}`, height: "100vh" }
          : { background: `${coditionStyleNight.background}`, height: "100vh" }
      }
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
