import React from 'react'
import {TodoItem} from "../Mycomponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {console.log(props.todos.length)}
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo)=>{
        return(
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/> 
        </>)
    })}
    </div>
  )
} 