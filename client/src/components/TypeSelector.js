import React from "react";
import PropTypes from 'prop-types';

export default class TypeSelector extends React.Component{
  render(){
    const isArray = Array.isArray(this.props.buttonArray);
    return (
      <div className="todo-filters">
        {isArray &&
          this.props.buttonArray.map(btn => (
            <button
              onClick={() => this.props.onClick(btn)}
              className={`${this.props.btnActive === btn ? "btn-active" : ""}`}
              key={btn}
            >
              <span>{btn}</span>
            </button>
          ))}
      </div>
    );
  }
}

TypeSelector.propTypes = {
  buttonArray: PropTypes.array,
  onClick : PropTypes.func,
  btnActive : PropTypes.string,
};