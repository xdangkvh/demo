import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import React, {useState, useEffect} from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import{
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from "react-router-dom"

const App = () => {
  // let name = "Truong";
  const [name, setName] = useState("Dang");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {id: "to do1", title:"Watching movie", type: "Eric"},
    {id: "to do2", title: "Hello World", type: "Eric"},
    {id: "to do3", title:"playing game", type: "hoidanit"}
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, [address]);

  useEffect(() => {
    console.log("run use effect");
  }, [todos]);


  const handleEventClick = (event) => {
    // setName(address);
    // console.log(address)
    // console.log("Click me", {name});
    if(!address){
      alert("Empty input")
      return
    }
    let newTodo = {id: Math.floor(Math.random() * 100), title:address, type: "Eric"}
    setTodos([...todos, newTodo])
    setAddress("")
  }
  const handleOnChange = (event) =>{
    setAddress(event.target.value)
    // console.log(event.target.value)
  }

  const deleteDataTodo =(id)=>{
    let currentTodo= todos;
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }
  // re-render
  return (
    <Router>
      <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS {name} </h1>
        <Covid></Covid>
        {/* tai su dung component
        <Todo  todos= {todos} deleteDataTodo = {deleteDataTodo}>
        </Todo>
        
        <Todo todos = {todos.filter(item => item.type === "Eric")} deleteDataTodo = {deleteDataTodo}>
        </Todo>
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}> Click me</button> */}
      </header>
      </div>
    </Router>
   
  );
}

export default App;
