import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const TodoListWrapper = styled.ul`
  list-style: none;
  height: 60vh;
  overflow-y: scroll;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin: 0 10px;
`;

class TodoList extends Component {
  render() {
    const { todoList, url } = this.props;

    return (
      <TodoListWrapper>
        {todoList.map((item) =>
          <TodoItem
            todoItem={item}
            key={item.id}
            url={url}
          />
        )}
      </TodoListWrapper>
    );
  }
}

export default TodoList;
