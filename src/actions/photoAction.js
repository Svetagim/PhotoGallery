import { GET_PHOTOS } from './ActionTypes';

const searchPhoto = data => ({ type: GET_PHOTOS, data: {data }});

// const addItem = itemText => ({ type: ADD_ITEM, data: { key: itemText, isDone: false } })
// const toggleItemDone = item => ({ type: TOGGLE_ITEM, data: { item } })
// const setInputVisibility = isVisible => ({ type: SET_INPUT_VISIBILITY, data: isVisible })

// const handleAddButtonClick = () => setInputVisibility(true)

const handleSearchPhoto = value => async dispatch => {
    await fetch(
        `https://pixabay.com/api/?key=12289842-2e7a4baf65e7773d9a0559702&q=cat&image_type=photo&pretty=true`
      )
        .then(res => res.json())
        .then(async data => {
          dispatch(addResults(data))
        })
        .catch(err => {
          console.log({err})
        })
    dispatch(searchPhoto(data))
 }

export default {
//   handleAddButtonClick,
//   handleAddTodoSubmission,
//   toggleItemDone
handleSearchPhoto,
searchPhoto
};
