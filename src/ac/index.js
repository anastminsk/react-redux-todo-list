import {
  ADD_NEW_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_NEW_TASK,
  EDIT_TASK,
  SHOW_DONE_TASKS,
  FILTER_TASKS,
  GET_MODAL_CONFIG,
  OPEN_MODAL
} from '../constants';

export const addNewCategory = (newCategoryTitle) => ({
  type: ADD_NEW_CATEGORY,
  newCategoryTitle
});

export const editCategory = (newCategoryTitle, categoryToEdit) => ({
  type: EDIT_CATEGORY,
  newCategoryTitle,
  categoryToEdit
});

export const deleteCategory = (categoryToDelete) => ({
  type: DELETE_CATEGORY,
  categoryToDelete
});

export const addNewTask = (newTaskTitle, categoryToAddTask) => ({
  type: ADD_NEW_TASK,
  newTaskTitle,
  categoryToAddTask
});

export const editTask = (taskToEdit, newTaskTitle, isCompleted, description) => ({
  type: EDIT_TASK,
  taskToEdit,
  newTaskTitle,
  isCompleted,
  description
});

export const showDoneTasks = (newShowDone) => ({
  type: SHOW_DONE_TASKS,
  newShowDone
});

export const filterTasks = (newFilterText) => ({
  type: FILTER_TASKS,
  newFilterText
});

export const getModalConfig = (modalConfig) => ({
  type: GET_MODAL_CONFIG,
  modalConfig
});

export const openModal = () => ({
  type: OPEN_MODAL
});
