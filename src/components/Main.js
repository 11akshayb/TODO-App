import React, { Component } from "react";
import TypeSelector from './TypeSelector'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          selectedTodoType: "all",
          todoTypes: ["all", "pending", "completed"],
        };
      }

      render(){
          const {
          title,
          description,
          selectedTodoType,
          todoTypes
          } = this.state;
          return (
              <div className='todoContainer'>
                <TypeSelector buttonArray={todoTypes} btnActive={selectedTodoType} />
              </div>
          );
      }
    }

export default Main