import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Progress extends Component {
  render() {
    const { categoryList } = this.props;

    const progressCompleted = () => {
      let totalCategories = 0;
      let completedCategories = 0;

      categoryList.map(category => {
        if (category.todos.length !== 0) {
          let filtered = category.todos.filter(todo => !todo.isCompleted);
          if (filtered.length === 0) {
            completedCategories += 1;
          }
          totalCategories += 1;
          return category;
         }

        completedCategories += 1;
        totalCategories += 1;
        return category;
      });

      return completedCategories / totalCategories * 100;
    };

    return (
      <ProgressBar bsStyle="success" now={progressCompleted()} />
    );
  }
}

export default Progress;
