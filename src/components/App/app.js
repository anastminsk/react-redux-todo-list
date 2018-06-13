import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Category from '../Category';
import Todo from '../Todo';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/:categoryId/:todoId/edit"
              render={(routeProps) => (<Todo {...this.props} {...routeProps} />)}
            />
            <Route render={() => <Category {...this.props} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categories.categoryList
});

export default connect(mapStateToProps)(App);
