import React from "react";
import "../styles/TodoItem.css"

function TodoItem(props){

    return (
        <li className={`TodoItem--${props.completed}`}>
            <p>{props.text}</p>

            <button type="button" className="completed-button" onClick={props.onComplete}>COMPLETE</button>

            <button type="button" className="
            delete-button" onClick={props.onDelete}>DELETE</button>
        </li>
    );
}

export {TodoItem};