import React from "react";
import PropTypes from 'prop-types';

export default class TodoList extends React.Component{

  render(){
  const isEmptyArr = this.props.todos.length > 0 ? false : true;
    return (
      <div className="todo-list-container">
        <ul>
          {!isEmptyArr &&
            this.props.todos.map((todo, index) => (
              <li className="" key={index}>
              {!todo.completed &&  <button className="completed-todo" onClick={() => this.props.completedToDo(todo.id)}>&#10004;</button> }
                <div className={`todo-text-container ${todo.completed ? 'margin-left' : ''}`} >
                    <p className={`'font18 ${todo.completed ? 'line-through' : ''}`}>{todo.title}</p>
                    <p className={`font14 ${todo.completed ? 'line-through' : ''}`}>{todo.description}</p>
                </div>
                <button className="remove-todo" onClick={() => this.props.deleteTodo(todo.id)}>&#10006;</button>
              </li>
            ))}
          {isEmptyArr && <li>No Todos, Add One</li>}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  completedToDo : PropTypes.func,
  deleteTodo : PropTypes.func,
};