import React from "react";
import './TodoForm.css'
import { TodoContext } from "../../TodoContext/Index";

function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    function onCancel() {
        setOpenModal(false);
    }
    function onChange(event) {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="hacer tareas" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button" onClick={onCancel}
                >Cancelar</button>
                <button 
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};