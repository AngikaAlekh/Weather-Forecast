// UnitToggle.js
import React from 'react';

const UnitToggle = ({ onToggle, isCelsius }) => {
  return (
    <div className="toggle-container">
      <label className={`toggle-label ${isCelsius ? 'active' : ''}`} onClick={() => onToggle(true)}>
        Celsius
      </label>
      <label className={`toggle-label ${!isCelsius ? 'active' : ''}`} onClick={() => onToggle(false)}>
        Fahrenheit
      </label>
    </div>


    /*<div>
      <label>
        Celsius
        <input type="radio" value="celsius" checked={isCelsius} onChange={() => onToggle(true)} />
      </label>
      <label>
        Fahrenheit
        <input type="radio" value="fahrenheit" checked={!isCelsius} onChange={() => onToggle(false)} />
      </label>
    </div>*/
  );
};

export default UnitToggle;
