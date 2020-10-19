import React from "react";
import PropTypes from 'prop-types';


export default class AddButton extends React.Component{
  render(){
    return (
      <div className="add-button">
        <button onClick={() => this.props.onClick()}>&#x271A;</button>
      </div>
    );
  }
}
AddButton.propTypes = {
  onClick: PropTypes.func
};