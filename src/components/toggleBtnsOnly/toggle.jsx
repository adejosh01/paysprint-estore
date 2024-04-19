import React, { useState } from 'react';
// import './ToggleButton.scss';


const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleButton}>
      Toggle
    </button>
  );
};

export default Toggle;
