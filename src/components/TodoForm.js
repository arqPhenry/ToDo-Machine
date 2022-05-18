import React from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/TodoForm.css"

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Añadir ToDo</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la cebolla para el almuerzo"/>
            <div className="buttons">
                <button type="submit"
                className="addbutton"
                onClick={onSubmit}
                >AÑADIR</button>
                <button type="button"
                className="cancelbutton"
                onClick={onCancel}
                >CANCELAR</button>
            </div>
            
        </form>

    );
}

export {TodoForm};