import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addTodo}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(true);
  const [state, setState] = useState('pendiente');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!title.trim() || description.trim() === ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Titulo y descripción obligatorio'
      })
      return
    }

    addTodo({
      id: Date.now(),
      title,
      description,
      state: state === 'completado' ? true : false,
      priority
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setTitle('');
    setDescription('');
    setPriority(true);
    setState('pendiente');
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <div className="form-check">
        <input 
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={e => setPriority(e.target.checked)}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">Agregar</button>
    </form>
  )
}

export default Formulario