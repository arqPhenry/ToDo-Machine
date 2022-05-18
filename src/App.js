import React from "react";
import { TodoContext } from "./context/TodoContext";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {TodoItem} from "./components/TodoItem";
import { TodoLoading } from "./components/TodoLoading";
import { TodoEmpty } from "./components/TodoEmpty";
import {TodoForm} from "./components/TodoForm";
import {TodoProvider} from "./context/TodoContext"
import {Modal} from "./modals/Modal"


//import './App.css';



function App() {

  const value = React.useContext(TodoContext);

  return (
    <TodoProvider>
      <React.Fragment>
      <div className="container">
          <TodoContext.Consumer>
            {({
                openModal,
                setOpenModal
              }) => (
                <aside>
                <h1>ToDo List</h1>
                <TodoCounter/>
                <div className="searcher">
                  <TodoSearch/>
                  <div className="button">
                    <CreateTodoButton
                      setOpenModal={setOpenModal}
                      openModal={openModal}
                    />
                  </div>
                </div>
              </aside>
            )}
          </TodoContext.Consumer>
        
          

          <TodoContext.Consumer>
            {({
                error, 
                loading, 
                searchedTodos, 
                completeTodo, 
                deleteTodo,
                openModal,
                setOpenModal
              }) => (
            <main>
              <TodoList>
                {error && <span>Ha ocurrido un error</span>}
                {loading && <TodoLoading/>}
                {(!error && !loading && !searchedTodos.length) && <TodoEmpty/>}
                {searchedTodos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>))}
              </TodoList>
              <div className="button">
                <CreateTodoButton
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                />
              </div>

              {!!openModal && (
                <Modal>
                  <TodoForm/>
                </Modal>
              )} 
              
            </main>
            
            
            )}
          </TodoContext.Consumer>

        </div>
      </React.Fragment>
    </TodoProvider>
    
  );
}

export default App;
