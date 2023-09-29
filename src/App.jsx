import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStateTodos = JSON.parse(localStorage.getItem('todosLS')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todosLS', JSON.stringify(todos))
  },[todos])
  

  const addTodo = newTodo => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = idDelete => {
    const newArray = todos.filter(todoFilter => todoFilter.id !== idDelete)
    setTodos(newArray);
  }

  const updateTodo = idUpdate => {
    const newArray = todos.map(todoMap => {
      if(todoMap.id === idUpdate){
        todoMap.state = !todoMap.state
      }
      return todoMap
    })
    setTodos(newArray)
  }

  const orderTodo = arrayTodos => {
    return arrayTodos.sort( (a,b) => {
      if(a.priority === b.priority) return 0
      if(a.priority === true) return -1
      if(a.priority === false) return 1
    })
  }

  return (
    <>
      <div className="container mb-2">
        <h1 className="my-5">Formularios</h1>
        <Formulario addTodo={addTodo} />
        <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    </>
  )
}

export default App