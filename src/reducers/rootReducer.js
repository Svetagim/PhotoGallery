import { combineReducers } from 'redux'
import ChangeViewReducer from './ChangeViewReducer'

export default combineReducers({
  viewReducer: ChangeViewReducer,
  user: () => ({ name: 'ziv', email: 'ziv@levy.com' })
})
