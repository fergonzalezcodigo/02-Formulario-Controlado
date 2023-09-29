import Todo from "./Todo"

const Todos = ({todos, deleteTodo, updateTodo}) => {
  return (
    <>
      <div className="mt-5">
        <h2 className="text-center">Todos</h2>
        <ul>
          {
            todos.map(todoMap => (
              // <li key={todoMap.id}>{todoMap.title}</li>
              <Todo key={todoMap.id} todoMap={todoMap} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))
          }
          {
            todos.length === 0 && (<li className="list-group-item text-center">Sin todos</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default Todos