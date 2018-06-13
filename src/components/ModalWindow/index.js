import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalDialog from '../ModalDialog';
import { editCategory, deleteCategory, openModal } from '../../ac';

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {newItemTitle : ""};
  }

  handleTitleChange = (e) => {
    this.setState({newItemTitle: e.target.value});
  };

  handleEditCategory = () => {
    const { editCategory, modalConfig } = this.props;
    if (this.state.newItemTitle.trim()) editCategory(this.state.newItemTitle, modalConfig.focusedItem);
  };

  handleSubmit = () => {
    const { deleteCategory, modalConfig, handleModalOpen } = this.props;

    switch(modalConfig.behavior) {
      case 'deleteCategory':
        deleteCategory(modalConfig.focusedItem);
        break;
      case 'editCategory':
        this.handleEditCategory();
        break;
      default:
        throw new Error();
    }

      handleModalOpen();
    };

  render() {
    const { modalConfig, isModalOpen, handleModalOpen } = this.props;

    return (
      <ModalDialog
        modalConfig={modalConfig}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleTitleChange={this.handleTitleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  modalConfig: state.modal.modalConfig,
  isModalOpen: state.modal.isModalOpen
});

export default connect(mapStateToProps, {
  editCategory,
  deleteCategory,
  handleModalOpen: openModal
})(ModalWindow);
