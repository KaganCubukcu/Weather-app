import React from "react";

import { MainContext, useContext } from "./context";

const MainContent = () => {
  const { data } = useContext(MainContext);

  return (
    <div className="container">
      <h1>{data ? ` ${data.location.name} ` : null}</h1>
      <div className="current-weather">
        <div className="temps">
          <section className="symbol">
            <img src={data ? `${data.current.condition.icon}` : null}></img>
          </section>
          <section className="temp">
            {data ? ` ${data.current.temp_c} ` : null}°C
          </section>
        </div>
        <div className="condition">
          {data ? `${data.current.condition.text}` : null}
        </div>

        <div className="properties">
          <section className="feels-like">
            {data ? `Hissedilen ${data.current.feelslike_c} °` : null}
          </section>
          <section className="wind">
            {data ? `Rüzgar ${data.current.wind_mph} km/h` : null}
          </section>
          <section className="visibility">
            {data ? `Görüş Alanı ${data.current.vis_km} km` : null}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
