import { combineReducers } from 'redux'
import { theme, silderMode } from "./ui"

const todoApp = combineReducers({
    theme, silderMode
})
export default todoApp;