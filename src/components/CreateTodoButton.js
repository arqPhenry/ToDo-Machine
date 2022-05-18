import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton({setOpenModal, openModal}){
    const onClickButton = () =>{

        setOpenModal(!openModal)

    }

    return (
        <button type="button" className="CreateTodoButton"
        onClick={onClickButton}>
            <span>+</span>
        </button>
    );
}

export {CreateTodoButton};