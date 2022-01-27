import React from 'react';

const App = ({ size }) => {
  return <span className="spinner" style={{ border: `${size} solid #ccc` }}></span>;
};

export default App;
