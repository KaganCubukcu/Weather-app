import Clear from "./images/day/clear.jpg";
import Cloudy from "./images/day/cloudy.jpg";
import Overcast from "./images/day/overcast.jpg";
import Rainy from "./images/day/rainy.jpg";
import Snow from "./images/day/snow.jpg";
import Storm from "./images/day/storm.jpg";
import Nightclouds from "./images/night/nightclouds.png";
import Nightrain from "./images/night/nightrain.jpg";
import Nightsky from "./images/night/nightclear.jpg";

const Images = {
  day: {
    clear: Clear,
    cloudy: Cloudy,
    rain: Rainy,
    overcast: Overcast,
    snow: Snow,
    storm: Storm,
  },
  night: {
    cloudy: Nightclouds,
    rain: Nightrain,
    clear: Nightsky,
  },
};

export default Images;
