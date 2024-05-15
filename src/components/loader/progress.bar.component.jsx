import React from 'react';

const ProgressBar = ({ width }) => {
  const progressBarStyles = {
    width: `${width}%`,
    height: '20px',
    backgroundColor: '#4079ED',
    borderRadius: '10px',
    transition: 'width 0.3s ease-in-out'
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={progressBarStyles}></div>
    </div>
  );
};

export default ProgressBar;
