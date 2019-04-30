import { CHANGE_VIEW } from './ActionTypes';

const changeView = searchViewNum => ({ type: CHANGE_VIEW, data: searchViewNum });
const handleChangeView = searchViewNum => async dispatch => {
    dispatch(changeView(searchViewNum))
 }

export default {
    handleChangeView,
    changeView
};
