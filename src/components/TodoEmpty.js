import React from "react";
import "../styles/TodoEmpty.css"

function TodoEmpty (){
    return (
        <div className="TodoEmpty">
            <h3>Agrega tus pendientes</h3>
            <div className="Img">
                <img src="https://cdn-icons-png.flaticon.com/512/2666/2666505.png" alt="todolist"></img>
            </div>
            <span>Selecciona el el botón de + para iniciar</span>
        </div>
    )
}

export {TodoEmpty};