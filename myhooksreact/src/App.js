import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import {useState} from 'react';
const App = () => {
  let name = "Truong";

  const handleEventClick = (event) => {
    console.log("Click me", event.target.value);
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS {name} </h1>
        <input type="text" value="Dang" onClick={(event) => handleEventClick(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}> Click me</button>
      </header>
    </div>
  );
}

export default App;
