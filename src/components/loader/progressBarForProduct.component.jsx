import React from 'react';

const ProgressBarForProduct = ({ width }) => {
  const progressBarStyles = {
    width: `${width}%`,
    height: '10px',
    backgroundColor: '#20590C',
    borderRadius: '20px',
  };

  return (
    <div style={{ borderRadius: '50px', overflow: 'hidden', background: '#E6EAEEB2' }}>
      <div style={progressBarStyles}></div>
    </div>
  );


};

export default ProgressBarForProduct;
