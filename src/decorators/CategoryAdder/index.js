import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import { addNewCategory } from '../../ac';

class CategoryAdder extends Component {
    render() {
        return <ItemAdder placeholder="Enter category title" {...this.props} />
    }
}

export default connect(null, {addNewItem: addNewCategory})(CategoryAdder);
