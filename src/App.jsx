import { useState } from "react"
import Header from "./components/Header"
import Todos from "./components/Todos"
import { Addtodo } from "./components/Addtodo"


function App() {
  const [todos,setTodos] = useState([{id:1,text:'shihan',day:'fev 5th',reminder:true},
  {id:2,text:'rahul',day:'march 6th',reminder:true},
  {id:3,text:'rajib',day:'april 7th',reminder:false}])
  const deleteTodo = (id) =>{
       console.log(id)
       setTodos(todos.filter((todo)=> todo.id !== id))
  }
  const toggleTodo = (id) =>{
    console.log(id)
    setTodos(todos.map((todo)=>todo.id === id ? {...todo,reminder:!todo.reminder}:todo))
  }
  const addTodo = (task) =>{
            const id = Math.floor(Math.random()*10000)+1
            const newTodo = {id,...task}
            setTodos([...todos,newTodo])
  }

  return (
    <>
     <div className="container">
     <Header />
     <Addtodo onAdd={addTodo}/>
     <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
     </div> 
    </>
  )
}

export default App
