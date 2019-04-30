import { combineReducers } from 'redux'
import ChangeViewReducer from './ChangeViewReducer'
import PhotoReducer from './PhotoReducer'

export default combineReducers({
  viewReducer: ChangeViewReducer,
  photoReducer: PhotoReducer
})
