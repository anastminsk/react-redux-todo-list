import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const AddForm = styled.form`
  display: flex;
  height: 36px;
  margin: 0 20px 20px 20px;
`;

class ItemAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {newItemTitle : ""};
  }

  handleTitleChange = (e) => {
    this.setState({
      newItemTitle: e.target.value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const { categoryId, addNewItem } = this.props;
      if (this.state.newItemTitle.trim()) addNewItem(this.state.newItemTitle, categoryId);
  };

  render() {
    return (
      <AddForm onSubmit={this.handleSubmit}>
        <input style={{border: "2px solid #0080ff", width: "40vw", padding: "0 10px"}}
          type="text"
          name="categoryAdder"
          id="categoryAdder"
          placeholder={this.props.placeholder}
          value={this.state.newItemTitle}
          onChange={this.handleTitleChange}
        />
        <Button bsStyle="primary" onClick={this.handleSubmit}>
          Add
        </Button>
      </AddForm>
    );
  }
}

export default ItemAdder;
