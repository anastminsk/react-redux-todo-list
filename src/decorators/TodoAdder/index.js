import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import { addNewTask } from '../../ac';

class TodoAdder extends Component {
    render() {
        return <ItemAdder placeholder="Text input with button" {...this.props} />
    }
}

export default connect(null, {addNewItem: addNewTask})(TodoAdder);
