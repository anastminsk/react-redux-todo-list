import data from '../data';
import {
  ADD_NEW_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_NEW_TASK,
  EDIT_TASK,
  SHOW_DONE_TASKS,
  FILTER_TASKS
} from '../constants';

const initialState = {
  categoryList: data,
  showDone: false,
  filterText: ''
};

const categories = (state = initialState, action) => {
  let newCategoryList;

  switch (action.type) {

    case ADD_NEW_CATEGORY:
      return {...state, categoryList: [{
        id: Date.now(),
        title: action.newCategoryTitle,
        todos: []
      }, ...state.categoryList]};

    case EDIT_CATEGORY:
      newCategoryList = state.categoryList.map(category => {
        if (category.id === action.categoryToEdit) {
            category.title = action.newCategoryTitle
        }
        return category;
      });
      return {...state, categoryList: newCategoryList};

    case DELETE_CATEGORY:
      newCategoryList = state.categoryList.filter(category => category.id !== action.categoryToDelete);
      return {...state, categoryList: newCategoryList};

    case ADD_NEW_TASK:
      newCategoryList = state.categoryList.map(category => {
        if (category.id === action.categoryToAddTask) {
          category.todos = [{
            id: Date.now(),
            title: action.newTaskTitle,
            isCompleted: false
          }, ...category.todos]
        }
        return category;
      });
      return {...state, categoryList: newCategoryList};

    case EDIT_TASK:
      newCategoryList = state.categoryList.map(category => {
        category.todos.map(todo => {
          if (todo.id === action.taskToEdit) {
            todo.title = action.newTaskTitle;
            todo.isCompleted = action.isCompleted;
            todo.description = action.description;
          }
          return todo;
        });
        return category;
      });
      return {...state, categoryList: newCategoryList};

    case SHOW_DONE_TASKS:
      if (action.newShowDone) {
        newCategoryList = state.categoryList.map(category => {
            category.todos = category.todos.filter(todo => todo.isCompleted);
            return category;
          });
        return {...state, categoryList: newCategoryList, showDone: action.newShowDone};
      }
      return {...state, showDone: action.newShowDone};

    case FILTER_TASKS:
      if (action.newFilterText) {
        newCategoryList = state.categoryList.map(category => {
            category.todos = category.todos.filter(todo => todo.title.indexOf(action.newFilterText) !== -1);
            return category;
          });
        return {...state, categoryList: newCategoryList, filterText: action.newFilterText};
      }
      return {...state, filterText: action.newFilterText};

    default:
      return state;
  }
};

export default categories;
