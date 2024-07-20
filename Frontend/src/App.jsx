import { useState } from "react"
import CreateTodo from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import { useEffect } from "react"
import axios from "axios"

function App() {

  const [Todo,setTodo]=useState([])
  
  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodo(json.todos);
  // })

  useEffect(()=>{
    axios.get("http://localhost:3000/todos")
    .then(function(response){
      setTodo(response.data.todos)
    })

  },[Todo]);

  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={Todo}></Todos>
    </div>
  )
}

export default App
