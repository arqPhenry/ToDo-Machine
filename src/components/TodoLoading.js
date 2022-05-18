import React from "react";
import "../styles/TodoLoading.css"

function TodoLoading () {
    return(
        <ul className="TodoLoading">
            <li>
                <span className="span1"></span>
                <span className="span2"></span>
            </li>
            <li>
                <span className="span1"></span>
                <span className="span2"></span>
            </li>
            <li>
                <span className="span1"></span>
                <span className="span2"></span>
            </li>
        </ul>
    )
}

export {TodoLoading};