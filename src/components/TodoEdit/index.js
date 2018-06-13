import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { editTask } from '../../ac';

const TodoEditWrapper = styled.div`
  flex-grow: 1;
  margin: 10px 10px 0 10px;
  list-style: none;
  max-height: 90vh;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  padding: 15px;
`;

const TodoEditTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoEditSpan = styled.span`
  margin-right: 7px;
`;

const TodoEditCheckboxWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const TodoEditButtonWrap = styled.div`
  float: right;
`;

class TodoEdit extends Component {
  render() {
    const { categoryId, editTask, todoItem } = this.props;

    const editedTask = {
      newTitle: null,
      newIsCompleted: null,
      newDescription: null
    };

    const handleSubmit = () => {
      editTask(todoItem.id, editedTask.newTitle.value, editedTask.newIsCompleted.checked, editedTask.newDescription.value);
    };

    return (
      <TodoEditWrapper>
        <TodoEditTitle>
          <TodoEditSpan>Please edit the task name:</TodoEditSpan>
          <input
            type="text"
            id="edit-todo"
            defaultValue={todoItem.title}
            ref={(title) => editedTask.newTitle = title}
            style={{
              margin: "5px 10px 0 10px",
              flexGrow: "1",
              border: "2px solid #0080ff",
              fontSize: "16px",
              padding: "0 5px"
            }}
          />
        </TodoEditTitle>
        <TodoEditCheckboxWrap>
          <label>
            <input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              defaultChecked={todoItem.isCompleted}
              ref={(isCompleted) => editedTask.newIsCompleted = isCompleted}
              style={{marginRight: "7px"}}
            />
            Done
          </label>
        </TodoEditCheckboxWrap>
        <h4>Description</h4>
        <textarea
          defaultValue={todoItem.description}
          placeholder="Please enter the task description"
          ref={(description) => editedTask.newDescription = description}
          style={{
            width: "80%",
            height: "250px",
            marginBottom: "20px",
            padding: "5px",
            fontSize: "16px",
            border: "2px solid #0080ff"
          }}
        />
        <TodoEditButtonWrap>
          <Link to={`/${categoryId}`}>
            <Button bsStyle="info" onClick={handleSubmit} style={{marginRight: "10px"}}>
              Save changes
            </Button>
          </Link>
          <Link to={`/${categoryId}`}>
            <Button bsStyle="danger">
              Cancel
            </Button>
          </Link>
        </TodoEditButtonWrap>
      </TodoEditWrapper>
    );
  }
}

export default connect(null, { editTask })(TodoEdit);
