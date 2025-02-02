import React from 'react';

const ProgressBar = ({ width }) => {
  const progressBarStyles = {
    width: `${width}%`,
    height: '10px',
    backgroundColor: '#4F0B92',
    borderRadius: '10px',
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', background: '#f5f5f5' }}>
      <div style={progressBarStyles}></div>
    </div>
  );


};

export default ProgressBar;
