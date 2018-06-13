import {
  GET_MODAL_CONFIG,
  OPEN_MODAL
} from '../constants';

const initialState = {
  modalConfig: {
    itemTitle: "",
    focusedItem: null,
    behavior: "",
    title: ""
  },
  isModalOpen: false
};

const modal = (state = initialState, action) => {
  switch (action.type) {
      case GET_MODAL_CONFIG:
        return {...state, modalConfig: action.modalConfig};

      case OPEN_MODAL:
        return {...state, isModalOpen: !state.isModalOpen};

      default:
        return state;
  }
};

export default modal;
