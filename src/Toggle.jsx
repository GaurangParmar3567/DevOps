import React, { useState } from "react";
import "./ToggleSlider.css"; // You can create a separate CSS file or use inline styles

const ToggleSlider = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-container ${isOn ? "active" : ""}`}
      onClick={toggleSwitch}
    >
      <div className={`circle ${isOn ? "active" : "not-active"}`}>
        <span className="text">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default ToggleSlider;
