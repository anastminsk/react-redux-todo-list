import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from '../TodoList';
import TodoAdder from '../../decorators/TodoAdder';

const TodoBlockWrapper = styled.div`
  flex-grow: 1;
  margin-top: 10px;
`;

class TodoBlock extends Component {
  render() {
    const { match, categoryList } = this.props;

    const categoryId = Number(match.params.categoryId);
    const todoList = categoryList.find(category => category.id === categoryId).todos;

    return (
      <TodoBlockWrapper>
        <TodoAdder categoryId={categoryId}/>
        <TodoList todoList={todoList} url={match.url}/>
      </TodoBlockWrapper>
    );
  }
}

export default TodoBlock;
