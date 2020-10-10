import React, { Component } from "react";
import TypeSelector from './TypeSelector';
import TodoList from './TodoList';
import ModalView from './ModalView';
import ModalInnerView from './ModalInnverView'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          selectedTodoType: "all",
          todoTypes: ["all", "pending", "completed"],
          isModalOpen: false,
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
    
      onTitleChange = title => {
        this.setState({ title });
      };

      onDescChange = description => {
        this.setState({ description });
      };

      addTodo = () => {
        let todosList = [];
        let todoItem = {};
        const { title, description } = this.state;
        if (!title) return;
        const previousList = JSON.parse(localStorage.getItem("todos"));
        if (previousList !== "" && Array.isArray(previousList)) {
          todosList = [...previousList];
        }
        const d = new Date();
        const id = d.valueOf();
        todoItem = { id: id, title, description, completed: false };
        todosList.push(todoItem);
        this.updateLocalStorage(todosList);
        this.updateTodo(todosList);
        this.toggleModal();
        this.resetData();
      };


  completedToDo = id => {
    const { allTodos } = this.state;
    const todoIndex = this.state.allTodos.findIndex(todo => todo.id == id);
    allTodos[todoIndex].completed = true;
    this.updateTodo(allTodos);
    this.updateLocalStorage(allTodos);
  };

      updateTodo = allTodos => {
        this.setState({ allTodos });
      };
    
      updateLocalStorage = todoList => {
        localStorage.setItem("todos", JSON.stringify(todoList));
      };

      toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
      };
    
      resetData = () => {
        this.setState({ title: "", description: "" });
      };
    
      updateTodo = allTodos => {
        this.setState({ allTodos });
      };
    
      updateLocalStorage = todoList => {
        localStorage.setItem("todos", JSON.stringify(todoList));
      };
    
      deleteTodo = id => {
        const newList = this.state.allTodos.filter(todos => todos.id !== id);
        this.updateLocalStorage(newList);
        this.updateTodo(newList);
      };
    
      render(){
          const {
          title,
          isModalOpen,
          description,
          selectedTodoType,
          todoTypes,
          allTodos
          } = this.state;

          const listOfTodos = this.filterTodosToShow(selectedTodoType)
          

          return (
              <div className='todoContainer'>
                <TypeSelector buttonArray={todoTypes} onClick={this.showTodosOfSelectedType} btnActive={selectedTodoType} />
                <TodoList todos={listOfTodos} deleteTodo={this.deleteTodo} completedToDo={this.completedToDo} />
                <ModalView isVisible={isModalOpen}>
                <ModalInnerView
                    title={title}
                    description={description}
                    onTitleChange={this.onTitleChange}
                    OnDescChange={this.onDescChange}
                    add={this.addTodo}
                    reset={this.resetData}
                    cancel={this.toggleModal}
                />
                </ModalView>
              </div>
          );
      }
    }

export default Main