import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class CategoryEdit extends Component {
  render() {
    const { itemTitle, id, getModalConfig, handleModalOpen } = this.props;

    const newModalConfig = {
      itemTitle,
      focusedItem: id,
      behavior: "editCategory",
      title: "Please type the new name of category"
    };

    const handleSubmit = () => {
      getModalConfig(newModalConfig);
      handleModalOpen();
    };

    return (
      <Button>
        <Glyphicon glyph="pencil" onClick={handleSubmit} />
      </Button>
    );
  }
}

export default CategoryEdit;
