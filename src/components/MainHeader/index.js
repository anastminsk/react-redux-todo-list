import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBar from '../SearchBar';
import { showDoneTasks, filterTasks } from '../../ac';

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

class MainHeader extends Component {
  render() {
    const { showDone, filterText, showDoneTasks, filterTasks} = this.props;
    return (
      <Header>
        <Title>
          To-Do List
        </Title>
        <SearchBar
          showDone={showDone}
          filterText={filterText}
          onShowDoneChange={(newShowDone) => showDoneTasks(newShowDone)}
          onFilterTextChange={(newFilterText) => filterTasks(newFilterText)}
        />
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  showDone: state.categories.showDone,
  filterText: state.categories.filterText
});

export default connect(mapStateToProps, { showDoneTasks, filterTasks })(MainHeader);
