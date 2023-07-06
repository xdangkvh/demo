import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import {useState} from 'react';
const App = () => {
  // let name = "Truong";
  const [name, setName] = useState("Dang");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {id: "to do1", title:"Watching movie"},
    {id: "to do2", title: "Hello World"},
    {id: "tod do3", title:"playing game"}
  ]);

  const handleEventClick = (event) => {
    // setName(address);
    // console.log(address)
    // console.log("Click me", {name});
    if(!address){
      alert("Empty input")
      return
    }
    let newTodo = {id: "4", title:address}
    setTodos([...todos, newTodo])
    setAddress("")
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
        <div className='todos-container' >
            {
              todos.map(todo => {
                return(
                  <li className='todo-child' key={todo.id}>
                    {todo.title}
                  </li>
                )
              })
            }
         

        </div>
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}> Click me</button>
      </header>
    </div>
  );
}

export default App;
