import React from "react";
import { usePosition } from "use-position"; // https://github.com/trekhleb/use-position
import Weather from "simple-react-weather"; // https://github.com/lopogo59/simple-react-weather
import "./App.css";

// Get an API key here: https://openweathermap.org/appid
// NOTE: We would NEVER put keys in code like this
const API_KEY = "f91b3541a742621558589b0b77c5326e";

const App = () => {
  const { latitude, longitude } = usePosition();
  const hasLocationData = Boolean(latitude && longitude);

  return (
    <div className="container">
      <div className="weather">
        {/* <Weather unit="F" city="Tampa" appid={API_KEY} /> */}
        {hasLocationData && (
          <Weather unit="F" lat={latitude} lon={longitude} appid={API_KEY} />
        )}
        {!hasLocationData && <h1>Please allow location access</h1>}
      </div>
    </div>
  );
};

export default App;
