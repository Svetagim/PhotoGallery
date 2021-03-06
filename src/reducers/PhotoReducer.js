import { GET_PHOTOS } from '../actions/ActionTypes'

const initialState = {
    photos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS: {
      console.log(action.data)
        return {
            ...state,
            photos: action.data,
        }
      }
    default:
      return state
  }
};
