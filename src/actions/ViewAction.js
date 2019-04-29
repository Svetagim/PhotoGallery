import CHANGE_VIEW from './ActionTypes';

const changeView = searchViewNum => ({ type: CHANGE_VIEW, data: searchViewNum });

// const addItem = itemText => ({ type: ADD_ITEM, data: { key: itemText, isDone: false } })
// const toggleItemDone = item => ({ type: TOGGLE_ITEM, data: { item } })
// const setInputVisibility = isVisible => ({ type: SET_INPUT_VISIBILITY, data: isVisible })

// const handleAddButtonClick = () => setInputVisibility(true)

const handleChangeView = searchViewNum => async dispatch => {
//   dispatch(setInputVisibility(false))
//   dispatch(addItem(itemText))
    dispatch(changeView(searchViewNum))
 }

export default {
//   handleAddButtonClick,
//   handleAddTodoSubmission,
//   toggleItemDone
handleChangeView
};
