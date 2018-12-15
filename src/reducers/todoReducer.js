import { actionTypes } from "../actions/actionTypes";

const todo = (
  state = {
    items: [],
    isUserAddingNewItem: false
  },
  action
) => {
  const newItems = state.items;

  switch (action.type) {
    case actionTypes.ADD_ITEM:
      newItems.push({
        id: state.items.length,
        title: action.payload,
        isComplete: false
      });
      return Object.assign({}, state, {
        newItems
      });
    case actionTypes.COMPLETE_ITEM:
      newItems[action.payload].isComplete = true;
      return Object.assign({}, state, {
        newItems
      });
    case actionTypes.DELETE_ITEM:
      newItems.splice(action.payload, 1);
      return Object.assign({}, state, {
        newItems
      });
    default:
      return state;
  }
};

export default todo;
