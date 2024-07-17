import { useState } from "react"
import CreateTodo from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {

  const [Todo,setTodo]=useState([])
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodo(json.todos);
  })

  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={Todo}></Todos>
    </div>
  )
}

export default App
