import React from "react";

export default (props) => {
  const isEmptyArr = props.todos.length > 0 ? false : true;
  return (
    <div className="todo-list-container">
      <ul>
        {!isEmptyArr &&
          props.todos.map((todo, index) => (
            <li className="" key={index}>
             {!todo.completed &&  <button className="completed-todo" onClick={() => props.completedToDo(todo.id)}>&#10004;</button> }
              <div className={`todo-text-container ${todo.completed ? 'margin-left' : ''}`} >
                  <p className={`'todo-title ${todo.completed ? 'line-through' : ''}`}>{todo.title}</p>
                  <p className={`todo-desc ${todo.completed ? 'line-through' : ''}`}>{todo.description}</p>
              </div>
              <button className="remove-todo" onClick={() => props.deleteTodo(todo.id)}>&#10006;</button>
            </li>
          ))}
        {isEmptyArr && <li>No Todos to Show</li>}
      </ul>
    </div>
  );
};
