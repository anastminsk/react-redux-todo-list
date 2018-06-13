import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CategoryDelete from '../CategoryDelete';
import CategoryEdit from '../CategoryEdit';
import { editCategory, deleteCategory, openModal, getModalConfig } from '../../ac';

const CategoryItemWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  min-height: 30px;
`;

const CategoryItemLine = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 5px 0;
`;

const CategoryItemPanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CategoryItemTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 30px;
  flex-grow: 1;
`;

class CategoryItem extends Component {
  render() {
    const { categoryId, categoryTitle, getModalConfig, handleModalOpen } = this.props;

    const editCategoryRender = <CategoryEdit
      itemTitle={categoryTitle}
      id={categoryId}
      getModalConfig={getModalConfig}
      handleModalOpen={handleModalOpen}
    />;

    const deleteCategoryRender = <CategoryDelete
      id={categoryId}
      getModalConfig={getModalConfig}
      handleModalOpen={handleModalOpen}
    />;

    return (
      <CategoryItemWrapper>
        <CategoryItemLine>
          <CategoryItemPanel>
            <CategoryItemTitle>
              <Link to={`/${categoryId}`}>{categoryTitle}</Link>
            </CategoryItemTitle>
          { editCategoryRender }
         </CategoryItemPanel>
        { deleteCategoryRender }
        </CategoryItemLine>
      </CategoryItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  modalConfig: state.modal.modalConfig,
  isModalOpen: state.modal.isModalOpen
});

export default connect(mapStateToProps, {
  editCategory,
  deleteCategory,
  getModalConfig,
  handleModalOpen: openModal
})(CategoryItem);
