import logo from './logo.svg';
// import './App.css';
import Header from "./Mycomponents/Header";

import { Footer } from './Mycomponents/Footer';

import { Todos } from './Mycomponents/Todos';

import { About } from './Mycomponents/About';

import { AddTodo } from "./Mycomponents/AddTodo";

import React, { useState, useEffect } from "react";
// import {Routes} from "react-router"


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  const [todos, setTodos] = useState([]);
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    //Deleting this way in react doesn't work
    // let index =todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    
    console.log("I am adding this todo", title, desc)
    let sno;

    if (todos.length == 0) {
      sno = 0;
    }

    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);

    console.log(myTodo);

  }

 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // const [todos, setTodos] = useState([
  //   {
  //     sno:1,
  //     title:"Go to the market",
  //     desc: "You need to go to the market to get this job done"
  //   },

  //   {
  //     sno:2,
  //     title:"Go to the mall",
  //     desc: "You need to go to the mall to get this job done"
  //   },

  //   {
  //     sno:3,
  //     title:"Go to the shop",
  //     desc: "You need to go to the shop to get this job done"
  //   }
  // ]);
  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />

        <Routes>
          <Route exact path="/" />

          <Route exact path="/about" element={<About />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;