import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../MainHeader';
import Progress from '../Progress';
import CategoryBlock from '../CategoryBlock';
import TodoBlock from '../TodoBlock';

const CategoryWrapper = styled.div`
  display: flex;
  padding: 0 10px;
`;

class Category extends Component {
  render() {
    const { categoryList } = this.props;

    return (
      <div>
        <MainHeader />
        <Progress categoryList={categoryList} />
        <CategoryWrapper>
          <CategoryBlock categoryList={categoryList} />
          <Switch>
            <Route path="/:categoryId"
                   render={(routeProps) => <TodoBlock categoryList={categoryList} {...routeProps} />}
            />
            <Route render={() =>
                <p>Please select a category to see its tasks</p>} />
          </Switch>
        </CategoryWrapper>
      </div>
    );
  }
}

export default Category;
