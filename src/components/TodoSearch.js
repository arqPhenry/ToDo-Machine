import React from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/TodoSearch.css";

function TodoSearch(){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
        <input className="TodoSearch" type="text" placeholder="Ingresa tu tarea a buscar"
        onChange={onSearchValueChange}
        value={searchValue}/>
    );
}

export {TodoSearch};