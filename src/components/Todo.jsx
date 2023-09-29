const Todo = ({todoMap, deleteTodo, updateTodo}) => {
  const {title, description, state, priority, id} = todoMap;
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className={`${state === true ? 'text-decoration-line-through' : ''}`}>{title}</h5>
            <p>{description}</p>
            <div className="d-flex gap-2">
              <button
                onClick={() => deleteTodo(id)}
                className="btn btn-sm btn-danger"
              >
                Eliminar
              </button>
              <button onClick={() => updateTodo(id)} className="btn btn-sm btn-warning">Actualizar</button>
            </div>
          </div>
          <span className="badge text-bg-primary">
            {priority === true ? 'Prioritario' : ''}
          </span>
        </div>
      </li>
    </>
  )
}

export default Todo