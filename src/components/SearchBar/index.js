import React, { Component } from 'react';

class SearchBar extends Component {
  handleShowDone = (e) => {
    this.props.onShowDoneChange(e.target.checked);
  };

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  render() {
    const { showDone, filterText } = this.props;

    return (
      <form>
          <input
            id="ShowFilter"
            type="checkbox"
            checked={showDone}
            onChange={this.handleShowDone}
            style={{marginRight: "7px"}}
          />
          <label htmlFor="ShowFilter" style={{marginRight: "20px"}}>Show Done</label>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
      </form>
    );
  }
}

export default SearchBar;
