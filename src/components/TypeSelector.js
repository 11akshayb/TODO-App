import React from "react";

export default (props) => {
  const isArray = Array.isArray(props.buttonArray);
  return (
    <div className="todo-filters">
      {isArray &&
        props.buttonArray.map(btn => (
          <button
            className={`${props.btnActive === btn ? "btn-active" : ""}`}
            key={btn}
          >
            <span>{btn}</span>
          </button>
        ))}
    </div>
  );
};