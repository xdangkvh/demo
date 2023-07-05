import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App =() =>  {
  let name = "Truong";
  let number = 2021; 
  let obj = {name : "Dang", age: 27}
  let link = "https://www.youtube.com/watch?v=HI3cFTFdOPk&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=13&ab_channel=H%E1%BB%8FiD%C3%A2nIT"
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS {name} in {number}</h1>
        <p>{JSON.stringify(obj)}</p>
        <a href = {link} target = "_blank"> Visit my channel</a>
      </header>
    </div>
  );
}

export default App;
