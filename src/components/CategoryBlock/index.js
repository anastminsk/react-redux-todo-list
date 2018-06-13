import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryList from '../CategoryList';
import ModalWindow from '../ModalWindow';
import CategoryAdder from '../../decorators/CategoryAdder';

const CategoryBlockWrapper = styled.div`
  margin-top: 10px;
  width: 50vw;
`;

class CategoryBlock extends Component {
  render() {
    const { categoryList } = this.props;

    return (
      <CategoryBlockWrapper>
        <CategoryAdder />
        <CategoryList categoryList={categoryList} />
        <ModalWindow />
      </CategoryBlockWrapper>
    );
  }
}

export default CategoryBlock;
