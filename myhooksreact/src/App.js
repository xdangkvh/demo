import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import {useState} from 'react';
const App = () => {
  // let name = "Truong";
  const [name, setName] = useState("Dang");
  const [address, setAddress] = useState();
  const handleEventClick = (event) => {
    setName(address);
    console.log(address)
    // console.log("Click me", {name});
  }
  const handleOnChange = (event) =>{
    setAddress(event.target.value)
    // console.log(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS {name} </h1>
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}> Click me</button>
      </header>
    </div>
  );
}

export default App;
