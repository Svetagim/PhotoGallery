import { GET_PHOTOS } from './ActionTypes';

const addPhotos = photos => ({ type: GET_PHOTOS, data: photos});
const handleSearchPhoto = value => async dispatch => {
    await fetch(`https://pixabay.com/api/?key=12289842-2e7a4baf65e7773d9a0559702&q=${value}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(async photos => {
          console.log(photos)
          dispatch(addPhotos(photos))
        })
        .catch(err => {
          console.log({err})
        })
 }

export default {
handleSearchPhoto,
addPhotos
};
