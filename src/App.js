import React from 'react';
import './App.css';
import NewEvent from './components/NewEvent/NewEvent';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <NewEvent />
    </div>
  );
}

export default App;