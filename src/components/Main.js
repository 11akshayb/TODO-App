// import '../styles/Main.css';

import React, { Component } from "react";
import TypeSelector from './TypeSelector';
import TodoList from './TodoList';
import ModalView from './ModalView';
import AddButton from './AddButton'
import ModalInnerView from './ModalInnverView'
import SearchBox from './SearchBox'

import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedIn:true,
      isModalOpen: false,
      title: "",
      description: "",
      allTodos: JSON.parse(localStorage.getItem("todos")) || [],
      showTodoType: "all",
      todoTypes: ["all", "pending", "completed"],
      searchTerm: "",
      showDetailsModal: false,
      // showDetailsOf: ""
    };
  }

  // componentDidMount()
  // {
  //   console.log(this.props.isLoggedIn)
  // }
  onTitleChange = title => {
    this.setState({ title });
  };

  onDescChange = description => {
    this.setState({ description });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  resetData = () => {
    this.setState({ title: "", description: "" });
  };

  completedToDo = id => {
    const { allTodos } = this.state;
    const todoIndex = this.state.allTodos.findIndex(todo => todo.id === id);
    allTodos[todoIndex].completed = true;
    this.updateTodo(allTodos);
    this.updateLocalStorage(allTodos);
  };

  addTodo = () => {
    let todosList = [];
    let todoItem = {};
    const { title, description } = this.state;
    if (!title) return;
    //getting previous stored localstorage
    const previousList = JSON.parse(localStorage.getItem("todos"));
    if (previousList !== "" && Array.isArray(previousList)) {
      todosList = [...previousList];
    }
    //generating id based on milliseconds
    const d = new Date();
    const id = d.valueOf();
    todoItem = { id: id, title, description, completed: false };
    todosList.push(todoItem);
    //setting up local storage
    this.updateLocalStorage(todosList);
    //updating state
    this.updateTodo(todosList);
    //clearing state and hiding modal
    this.toggleModal();
    this.resetData();
  };

  updateTodo = allTodos => {
    this.setState({ allTodos });
  };

  updateLocalStorage = todoList => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  deleteTodo = id => {
    const newList = this.state.allTodos.filter(todos => todos.id !== id);
    //setting up new list after filtering out
    this.updateLocalStorage(newList);
    this.updateTodo(newList);
  };

  todosToShow = type => {
    this.setState({ showTodoType: type });
  };

  fiilerTodosToShow = type => {
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

  searchTodo = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  };

  filterWithSearchTerm = (searchTerm, todoList) => {
    const pattern = new RegExp(`^.*${searchTerm}.*$`);
    return todoList.filter(item => {
      if (pattern.test(item.title) || pattern.test(item.description)) {
        return item;
      }
    });
  };

  render() {
    const {
      // isLoggedIn,
      isModalOpen,
      title,
      description,
      showTodoType,
      todoTypes,
      searchTerm,
      showDetailsModal,
    } = this.state;

    const listOfTodos = this.filterWithSearchTerm(
      searchTerm,
      this.fiilerTodosToShow(showTodoType)
    );
    return (
      this.props.isLoggedIn ? (
      <>
        <div className="todo-wrapper">
          <TypeSelector
            buttonArray={todoTypes}
            onClick={this.todosToShow}
            btnActive={showTodoType}
          />
          {listOfTodos.length > 1 || searchTerm !== "" ? (
            <SearchBox onChange={this.searchTodo} />
          ) : null}
          <TodoList
            todos={listOfTodos}
            deleteTodo={this.deleteTodo}
            completedToDo={this.completedToDo}
          />
          {!isModalOpen && !showDetailsModal && (
            <AddButton onClick={this.toggleModal} />
          )}
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
      </>
      ) : (
        <div>PLEASE LOGIN!</div>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state.login.isLoggedin)
  return{
    
    isLoggedIn:state.login.isLoggedin
  }
}
export default connect (mapStateToProps)(Main);
