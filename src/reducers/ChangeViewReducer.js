import { CHANGE_VIEW } from '../actions/ActionTypes'

const initialState = {
  searchViewNum: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW: {
        // const view = 0
        // if (action.data == 0)
        //     view = 1
        // else
        //     view = 0
        return {
            ...state,
            searchViewNum: action.data,
        }
      }
    // case ADD_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.concat(action.data)
    //   }
    // case SET_INPUT_VISIBILITY:
    //   return {
    //     ...state,
    //     showAddItemInput: action.data
    //   }
    // case TOGGLE_ITEM: {
    //   const items = state.items.filter(i => i.key !== action.data.item.key)
    //   const newItem = { ...action.data.item, isDone: !action.data.item.isDone }
    //   return {
    //     ...state,
    //     items: [...items, newItem]
    //   }
    // }
    default:
      return state
  }
};
