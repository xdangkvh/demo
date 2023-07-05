import logo from './logo.svg';
import './App.css';


const App =() =>  {
  let name = "Truong";
  let number = 2021; 
  let obj = {name : "Dang", age: 27}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS {name} in {number}</h1>
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
}

export default App;
