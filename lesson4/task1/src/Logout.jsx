import React from 'react';

const App = props => {
  return <button className="logout btn" onClick={props.onLogout}>Logout</button>;
};

export default App;
