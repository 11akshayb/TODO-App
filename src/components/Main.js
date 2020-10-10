import React, { Component } from "react";
import TypeSelector from './TypeSelector'
import TodoList from './TodoList'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          selectedTodoType: "all",
          todoTypes: ["all", "pending", "completed"],
          isAddCardOpen: false,
          allTodos: JSON.parse(localStorage.getItem("todos")) || [],


        };
      }

      showTodosOfSelectedType = type => {
        this.setState({ selectedTodoType: type });
      };

      filterTodosToShow = type => {
        const { allTodos } = this.state;
        switch (type) {
          case "completed":
            return allTodos.filter(todo => todo.completed === true);
          case "pending":
            return allTodos.filter(todo => todo.completed === false);
          default:
            return allTodos;
        }
      };
    
      render(){
          const {
          title,
          isAddCardOpen,
          description,
          selectedTodoType,
          todoTypes,
          allTodos
          } = this.state;

          const listOfTodos = this.filterTodosToShow(selectedTodoType)
          

          return (
              <div className='todoContainer'>
                <TypeSelector buttonArray={todoTypes} onClick={this.showTodosOfSelectedType} btnActive={selectedTodoType} />
                <TodoList todos={listOfTodos} deleteTodo={this.deleteTodo} completedToDo={this.completedToDo}
          />
              </div>
          );
      }
    }

export default Main