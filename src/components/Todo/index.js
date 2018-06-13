import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryBlock from '../CategoryBlock';
import TodoEdit from '../TodoEdit';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  background-color: #99ccff;
`;

const Title = styled.div`
  font-size: 30px;
`;

const TodoEditWrapper = styled.div`
  display: flex;
`;

class Todo extends Component {
  render() {
    const { match, categoryList } = this.props;
    const categoryId = Number(match.params.categoryId);
    const todoId = Number(match.params.todoId);

    const findCurrentItem = (list, itemId) => list.find(item => item.id === itemId);

    const currentCategory = findCurrentItem(categoryList, categoryId);
    const todoItem = findCurrentItem(currentCategory.todos, todoId);

    return (
      <div>
        <Header>
          <Title>
            {todoItem.title}
          </Title>
        </Header>
        <TodoEditWrapper>
          <CategoryBlock categoryList={categoryList} />
          <TodoEdit categoryId={categoryId} todoItem={todoItem} />
        </TodoEditWrapper>
      </div>
    );
  }
}

export default Todo;
