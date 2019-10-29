import { combineReducers } from 'redux'
import MenuSizingReducer from './MenuSizingReducer'

export default combineReducers({
    MenuSpecs: MenuSizingReducer
})