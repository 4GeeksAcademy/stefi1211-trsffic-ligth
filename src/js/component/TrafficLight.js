import React, { useState } from 'react';
import "../styles/TrafficLight.css";

const TrafficLight = () => {
  const colors = ["onRed", "onYellow", "onGreen"];
  const [colorIndex, setColorIndex] = useState(null);

  const handleLightClick = (color) => {
    setColorIndex(colors.indexOf(color));
  };

  const handleNextClick = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <div>
      <div id="barra"></div>
      <div id="traffic-light">
        <div className="red light" id={colors[colorIndex] === "onRed" ? "onRed" : "off"} onClick={() => handleLightClick("onRed")}></div>
        <div className="yellow light" id={colors[colorIndex] === "onYellow" ? "onYellow" : "off"} onClick={() => handleLightClick("onYellow")}></div>
        <div className="green light" id={colors[colorIndex] === "onGreen" ? "onGreen" : "off"} onClick={() => handleLightClick("onGreen")}></div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark m-2 rounded-5" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default TrafficLight;
