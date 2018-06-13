import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalDialog extends Component {
  render() {
    const { modalConfig, isModalOpen, handleModalOpen, handleTitleChange, handleSubmit } = this.props;

    const inputRender = (modalConfig.behavior === 'editCategory') && (<input
            type="text"
            defaultValue={modalConfig.itemTitle}
            onBlur={handleTitleChange}
            style={{
              flexGrow: "1",
              width: "500px",
              border: "2px solid #0080ff"
            }}
        />);

    return (
      <Modal
        show={isModalOpen}
        onHide={handleModalOpen}
        container={this}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalConfig.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {inputRender}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="info" onClick={handleSubmit}>Submit</Button>
          <Button bsStyle="danger" onClick={handleModalOpen}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalDialog;
