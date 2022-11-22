import React from "react";
import { MainContext, useContext } from "./context";

const Card = () => {
  const { data, momentAll } = useContext(MainContext);

  return (
    <div className="card">
      <div className="card-1">
        <section className="date">{momentAll.momentNow}</section>
        <section className="card-symbol">
          <img
            src={
              data ? `${data.forecast.forecastday[0].day.condition.icon}` : null
            }
            alt="condition_icon"
          ></img>
        </section>
        <section className="card-temp">
          <section className="max-temp">
            {data ? `↑ ${data.forecast.forecastday[0].day.maxtemp_c}° ` : null}
          </section>
          <section>
            {data ? `↓ ${data.forecast.forecastday[0].day.mintemp_c}°` : null}
          </section>
        </section>
        <section className="card-condition">
          {data ? `${data.forecast.forecastday[0].day.condition.text}` : null}
        </section>
      </div>
      <div className="card-1">
        <section className="date">{momentAll.momentNextDay}</section>
        <section className="card-symbol">
          <img
            src={
              data ? `${data.forecast.forecastday[1].day.condition.icon}` : null
            }
            alt="condition_icon"
          ></img>
        </section>
        <section className="card-temp">
          <section className="max-temp">
            {data ? `↑ ${data.forecast.forecastday[1].day.maxtemp_c}°` : null}
          </section>
          <section>
            {data ? `↓ ${data.forecast.forecastday[1].day.mintemp_c}°` : null}
          </section>
        </section>
        <section className="card-condition">
          {data ? `${data.forecast.forecastday[1].day.condition.text}` : null}
        </section>
      </div>
      <div className="card-1">
        <section className="date">{momentAll.momentTwoNextDay}</section>
        <section className="card-symbol">
          <img
            src={
              data ? `${data.forecast.forecastday[2].day.condition.icon}` : null
            }
            alt="condition_icon"
          ></img>
        </section>
        <section className="card-temp">
          <section className="max-temp">
            {data ? `↑ ${data.forecast.forecastday[2].day.maxtemp_c}°` : null}
          </section>
          <section>
            {data ? `↓ ${data.forecast.forecastday[2].day.mintemp_c}°` : null}
          </section>
        </section>
        <section className="card-condition">
          {data ? `${data.forecast.forecastday[2].day.condition.text}` : null}
        </section>
      </div>
    </div>
  );
};

export default Card;
