import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';

const CategoryDeleteWrapper = styled.div`
  margin-right: 10px;
`;

class CategoryDelete extends Component {
  render() {
    const { id, getModalConfig, handleModalOpen } = this.props;

    const newModalConfig = {
      focusedItem: id,
      behavior: "deleteCategory",
      title: "Are you sure to delete this category?"
    };

    const handleSubmit = () => {
      getModalConfig(newModalConfig);
      handleModalOpen();
    };

    return (
      <CategoryDeleteWrapper>
        <Button bsStyle="danger">
          <Glyphicon glyph="trash" onClick={handleSubmit} />
        </Button>
      </CategoryDeleteWrapper>
    );
  }
}

export default CategoryDelete;
