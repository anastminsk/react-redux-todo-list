import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from '../CategoryItem';

const CategoryListWrapper = styled.ul`
  width: 48vw;
  max-height: 60vh;
  list-style: none;
  overflow-y: scroll;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 0 10px;
`;

class CategoryList extends Component {
  render() {
    const { categoryList } = this.props;

    return (
      <CategoryListWrapper>
        {categoryList.map(category =>
          <CategoryItem
            key={category.id}
            categoryTitle={category.title}
            categoryId={category.id}
            {...this.props}
          />
        )}
      </CategoryListWrapper>
    );
  }
}

export default CategoryList;
