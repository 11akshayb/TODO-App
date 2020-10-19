import React from "react";
import PropTypes from 'prop-types';


class ModalView extends React.Component{
  // propTypes: {
  //   isVisible: PropTypes.bool,
  //   // date: PropTypes.string
  // },
  render(){
    
    // const {isVisible} = this.props;

  return (
    <div className={`${this.props.isVisible ? 'modal' : 'modal-closed'}`}>
      {/* <div className="modal-container">{this.props.children}</div> */}
    </div>
  );
  }
}

ModalView.propTypes = {
  isVisible: PropTypes.bool
};

export default ModalView;