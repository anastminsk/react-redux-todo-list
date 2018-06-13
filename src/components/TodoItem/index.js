import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;

const TodoItemName = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

class TodoItem extends Component {
  render() {
    const { url, todoItem } = this.props;

    return (
      <TodoItemWrapper>
        <TodoItemName>
          <input
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            defaultChecked={todoItem.isCompleted}
            disabled
            style={{marginRight: "7px", marginBottom: "4px"}}
          />
          <div>{todoItem.title}</div>
        </TodoItemName>
        <Link to={`${url}/${todoItem.id}/edit`}>
          <Button>
            <Glyphicon glyph="pencil" />
          </Button>
        </Link>
      </TodoItemWrapper>
    );
  }
}

export default TodoItem;
