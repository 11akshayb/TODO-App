import React from "react";
import PropTypes from 'prop-types';

export default class ModalInnverView extends React.Component{
  render(){
    return (
      <>
        <h3>Add New Todo</h3>
        <input
          type="text"
          placeholder="title"
          className="input"
          value={this.props.title}
          onChange={e => this.props.onTitleChange(e.target.value)}
          maxLength="40"
        />
        <textarea
          type="text"
          placeholder="description"
          value={this.props.description}
          className="input"
          rows="5"
          onChange={e => this.props.OnDescChange(e.target.value)}
          maxLength="250"
        />
        <div className="modal-action-btn-container">
          <button
            className="modal-action-button"
            onClick={() => this.props.add()}
            disabled={!this.props.title}
          >
            Add
          </button>
          <button className="modal-action-button" onClick={() => this.props.reset()}>
            Reset
          </button>
          <button className="modal-action-button" onClick={() => this.props.cancel()}>
            Cancel
          </button>
        </div>
      </>
    );
  }
}

ModalInnverView.propTypes = {
  title: PropTypes.string,
  description : PropTypes.string,
  add : PropTypes.func,
  reset : PropTypes.func,
  cancel : PropTypes.func,
  onTitleChange : PropTypes.func,
  OnDescChange : PropTypes.func
};