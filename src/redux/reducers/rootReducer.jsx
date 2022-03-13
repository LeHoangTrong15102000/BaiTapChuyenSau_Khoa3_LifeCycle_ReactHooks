import {  combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer'
import FakeBookReducer from './FakeBookReducer'

export const rootReducer = combineReducers({
    TodoListReducer,
    FakeBookReducer,
})
    